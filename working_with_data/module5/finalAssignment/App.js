import { useEffect, useState, useCallback, useMemo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import debounce from 'lodash.debounce';
import {
  createTable,
  getMenuItems,
  saveMenuItems,
  filterByQueryAndCategories,
} from './database';
import Filters from './components/Filters';
import { getSectionListData, useUpdateEffect } from './utils';

const API_URL =
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';
const sections = ['Appetizers', 'Salads', 'Beverages'];

const Item = ({ title, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>${price}</Text>
  </View>
);

export default function App() {
  const [data, setData] = useState([]);
  const [searchBarText, setSearchBarText] = useState('');
  const [query, setQuery] = useState('');
  const [filterSelections, setFilterSelections] = useState(
    sections.map(() => false)
  );

  const fetchData = async() => {
    // 1. Implement this function
    // Fetch the menu from the API_URL endpoint. You can visit the API_URL in your browser to inspect the data returned
    // The category field comes as an object with a property called "title". You just need to get the title value and set it under the key "category".
    // So the server response should be slighly transformed in this function (hint: map function) to flatten out each menu item in the array,

  try {
    const response = await fetch(API_URL);
    const json = await response.json();  // second time we use await
    const raw_menu = json.menu

    const formatted_menu = raw_menu.map((item) => {
     // go over all the itemss in the formatted_manu list, and edit the structure.
     return {"id": item.id, "title": item.title, "price": item.price, "category": item.category.title}; 

   });
    console.log("formatted_menu: ")
    console.log(formatted_menu);
    return formatted_menu;
  }
  catch (error) {
    console.error("An error in getting the data from the API")
    console.error(error);}
  };


  useEffect(() => {
    (async () => {
      try {
        // await createTable();
        console.log("1. Succeeded in running the first query")
        // let menuItems = await getMenuItems();

        // console.log("menuitems.length:")
        // console.log(menuitems.length)
        // The application only fetches the menu data once from a remote URL
        // and then stores it into a SQLite database.
        // After that, every application restart loads the menu from the database
        // if (!menuItems.length) {
        console.log("Trying to fetch the menu data from the API endpoint, since there was no data yet in the SQL table to read")
        const menuItems = await fetchData();
        console.log("2. Succeeded in getting data from the API, menuItems data is:")
        console.log(menuItems)
        createTable();
        console.log("3. Succeeded in creating the SQL table")
        saveMenuItems(menuItems);  // this is where the data gets written to the SQLite database 
        console.log("4. Succeeded in saving the menu items to the SQL table")
        // }

        const sectionListData = getSectionListData(menuItems);
        setData(sectionListData);
      } catch (e) {
        console.error("Failed in running database queries")
        // Handle error
        Alert.alert(e.message);
      }
    })();
  }, []);

  useUpdateEffect(() => {
    (async () => {
      const activeCategories = sections.filter((s, i) => {
        // If all filters are deselected, all categories are active
        if (filterSelections.every((item) => item === false)) {
          return true;
        }
        return filterSelections[i];
      });
      try {
        const menuItems = await filterByQueryAndCategories(
          query,
          activeCategories
        );
        console.log("These are the menuItems after applying the filters:")
        console.log(menuItems)
        console.log("Get the sctioListData after applying the filters:")
        const sectionListData = getSectionListData(menuItems);
        setData(sectionListData);
      } catch (e) {
        console.error("Catching an error in the filterByQueryAndCategories stage")
        Alert.alert(e.message);
      }
    })();
  }, [filterSelections, query]);

  const lookup = useCallback((q) => {
    setQuery(q);
  }, []);

  const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup]);

  const handleSearchChange = (text) => {
    setSearchBarText(text);
    debouncedLookup(text);
  };

  const handleFiltersChange = async (index) => {
    const arrayCopy = [...filterSelections];
    arrayCopy[index] = !filterSelections[index];
    setFilterSelections(arrayCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        placeholderTextColor="white"
        onChangeText={handleSearchChange}
        value={searchBarText}
        style={styles.searchBar}
        iconColor="white"
        inputStyle={{ color: 'white' }}
        elevation={0}
      />
      <Filters
        selections={filterSelections}
        onChange={handleFiltersChange}
        sections={sections}
      />
      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item title={item.title} price={item.price} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#495E57',
  },
  sectionList: {
    paddingHorizontal: 16,
  },
  searchBar: {
    marginBottom: 24,
    backgroundColor: '#495E57',
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    paddingVertical: 8,
    color: '#FBDABB',
    backgroundColor: '#495E57',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});
