import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../Styles'


const WelcomeScreen = ({ navigation }) => {
  return (
  <View style={styles.container}>
  <Image style={styles.logo}
         source={require('../assets/little-lemon-logo.png')}
         accessibilityLabel={'Little Lemon Logo'}/>
  <Text style={styles.regularText}>Little Lemon, your local Mediterranean Bistro </Text>
  <Pressable
    style={[styles.button, styles.enabledButton]}
    onPress={() => navigation.navigate('Subscribe')}>
    <Text style={styles.buttonText}>
      {'Newsletter'}
    </Text>
  </Pressable>
  </View>);
};


export default WelcomeScreen;
