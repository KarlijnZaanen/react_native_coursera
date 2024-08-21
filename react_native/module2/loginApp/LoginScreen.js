import {useState} from 'react';
import { ScrollView, Text, TextInput, StyleSheet} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState(''); 
  const [password, onChangePassword] = useState(''); 
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={onChangeEmail} 
        keyboardType={'email-address'}
        placeholder = 'email'
      />
      <TextInput
        style={styles.input}
        value={password}    
        onChangeText={onChangePassword}
        keyboardType={'default'}
        secureTextEntry={true}
        placeholder = 'password'
      />
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
