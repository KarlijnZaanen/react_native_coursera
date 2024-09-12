import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  return (
  <View>
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
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});


