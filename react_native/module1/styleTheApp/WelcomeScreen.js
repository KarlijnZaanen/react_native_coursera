import * as React from 'react';
import { View,  StyleSheet, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <Text
        style={welcomeStyles.title}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={welcomeStyles.body}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {flex: 1},
  title: {
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        },
  body: {
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        },
});
