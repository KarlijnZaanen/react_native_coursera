import { FlatList, Text, SafeAreaView, View, StyleSheet } from 'react-native';

export default App = () => {
  
  const menuData = require('./menuItems.json');


  // the functions Item and renderItem are very similar to the previous fetchDataApp
  const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{'$' + price}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.title} price={item.price} /> // here we parse the json object
  );  // this is the function that is used in the FlatList component


  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon Menus</Text>
        <FlatList
          data={menuData.menu}
          renderItem={renderItem}
        />
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: '#F4CE14',
    fontSize: 30,
    textAlign: 'center',
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22,
  },
});
