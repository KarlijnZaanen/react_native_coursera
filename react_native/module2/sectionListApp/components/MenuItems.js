import React from 'react';

import { View, Text, StyleSheet, SectionList } from 'react-native';


const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00', id: '1A' },
      { name: 'Moutabal', price: '$5.00', id: '2A' },
      { name: 'Falafel', price: '$7.50', id: '3A' },
      { name: 'Marinated Olives', price: '$5.00', id: '4A' },
      { name: 'Kofta', price: '$5.00', id: '5A' },
      { name: 'Eggplant Salad', price: '$8.50', id: '6A' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00', id: '7A' },
      { name: 'Smoked Salmon', price: '$14.00' , id: '8A'},
      { name: 'Kofta Burger', price: '$11.00', id: '9A' },
      { name: 'Turkish Kebab', price: '$15.50', id: '10A' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00', id: '12A' },
      { name: 'Bread Sticks', price: '$3.00' , id: '13A'},
      { name: 'Pita Pocket', price: '$3.00' , id: '14A'},
      { name: 'Lentil Soup', price: '$3.75' , id: '15A'},
      { name: 'Greek Salad', price: '$6.00' , id: '16A'},
      { name: 'Rice Pilaf', price: '$4.00' , id: '17A'},
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' , id: '18A'},
      { name: 'Tartufo', price: '$3.00' , id: '19A'},
      { name: 'Tiramisu', price: '$5.00' , id: '20A'},
      { name: 'Panna Cotta', price: '$5.00' , id: '21A'},
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section }) => (
      <Text style={menuStyles.sectionHeader}>{section.title} </Text>
    );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}>
      </SectionList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
});

export default MenuItems;
