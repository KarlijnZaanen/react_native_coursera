import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
     height: 150,
     width: 150,
     resizeMode: 'contain',
  },
  button: {
    width: '90%',
    padding: 10,
    marginVertical: 8,
    margin: 40,
    borderWidth: 2,
    borderRadius: 12
  },
  disabledButton: {
    backgroundColor: "lightgrey", 
    borderColor: "lightgrey", 
  },
  enabledButton: {
    backgroundColor: "#495E57",
    borderColor: "#495E57",  // dark green
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  regularText: {
    fontSize: 22,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});

export default styles;
