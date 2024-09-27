import { useRef, useEffect } from 'react';

export const SECTION_LIST_MOCK_DATA = [
    {
      title: 'Appetizers',
      data: [
        {
          id: '1',
          title: 'Pasta',
          price: '10',
        },
        {
          id: '3',
          title: 'Pizza',
          price: '8',
        },
      ],
    },
    {
      title: 'Salads',
      data: [
        {
          id: '2',
          title: 'Caesar',
          price: '2',
        },
        {
          id: '4',
          title: 'Greek',
          price: '3',
        },
      ],
    },
  ];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items. 
  // Each item has the following properties: "id", "title" and "price"
 
  // data is a list of objects with the properties:
  // {"id",  "title", "price", "category"}
  console.log("The formatted menu items data:")
  console.log(data)
  const categories = new Set();
  // first make a loop that will gather all the different categories (titles), without filling in the item data
  for (let i = 0; i < data.length; i++) {
    categories.add(data[i].category);
  }
  console.log("Categories: ")
  console.log(categories);

  const section_list_data = []
  for (const c of categories) {
    // go over all the categories to add the relevant items to their list: 
    const cat_data = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].category == c) {
        cat_data.push({"id": data[i].id, "title": data[i].title, "price": data[i].price})
      }
      // else don't add the item
    }
    // then add this particular category to the final section_list_data:
    section_list_data.push({"title": c, "data": cat_data})
    console.log("section_list_data: ")
    console.log(section_list_data);
  }
  console.log("Final section list data:");
  console.log(section_list_data);
  return section_list_data;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
