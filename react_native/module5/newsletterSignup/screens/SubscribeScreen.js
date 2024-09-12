import * as React from 'react';
import { Alert, View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native';

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState(''); 

  return (
  <View style={styles.container}>
  <Image style={styles.logo} source={require('../assets/little-lemon-logo-grey.png')} />
  <Text style={styles.regularText}>Subscribe to out newsletter for our latest delicious recipes! </Text>
  <TextInput 
    style={styles.input} 
    value={email} 
    onChangeText={onChangeEmail} 
    placeholder={'Type your email'} 
  /> 
  <Pressable
    style={styles.button}
    onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}>
    <Text style={styles.buttonText}>
      {'Subscribe'}
    </Text>
  </Pressable>
  </View>);

};

export default SubscribeScreen;

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});

