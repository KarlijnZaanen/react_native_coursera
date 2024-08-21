import * as React from 'react';
import { ScrollView, Text, TextInput, StyleSheet } from 'react-native';


export default function WelcomeScreen() {
  const [textValue, onChangeText] = React.useState(''); 

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput 
        style={styles.input} 
        value={textValue} 
        onChangeText={onChangeText} 
        placeholder = 'Type your text here'
      />
      <Text style={styles.regularText}> 
      The text that was input is: {textValue}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: 'EDEFEE', 
    backgroundColor: '#F4CE14', 
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
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
