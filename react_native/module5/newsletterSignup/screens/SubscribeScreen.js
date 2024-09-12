import * as React from 'react';
import { Alert, View, Text, Image, TextInput, Pressable } from 'react-native';
import styles from '../Styles'

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
