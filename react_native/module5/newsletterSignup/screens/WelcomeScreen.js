import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  return (
  <View style={styles.container}>
  <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
  <Text style={styles.regularText}>Little Lemon, your local Mediterranean Bistro </Text>
  <Pressable
    style={styles.button}
    onPress={() => navigation.navigate('Subscribe')}>
    <Text style={styles.buttonText}>
      {'Newsletter'}
    </Text>
  </Pressable>
  </View>);
};


export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
     height: 100,
     width: 300,
     resizeMode: 'contain',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
});


