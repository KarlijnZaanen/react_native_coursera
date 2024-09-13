import * as React from 'react';
import { Alert, View, Text, Image, TextInput, Pressable } from 'react-native';
import styles from '../Styles'
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState(''); 
  const [disable, setDisable] = React.useState(true);

  const conditionalButtonStyle =
    disable ? styles.disabledButton : styles.enabledButton;

  React.useEffect(() => {
    validateEmail(email) ? setDisable(false) : setDisable(true);
  }, [email]);

  return (
  <View style={styles.container}>
  <Image style={styles.logo}
         source={require('../assets/little-lemon-logo-grey.png')} 
         accessibilityLabel={'Little Lemon Logo'}/>
  <Text style={styles.regularText}>Subscribe to out newsletter for our latest delicious recipes! </Text>
  <TextInput 
    style={styles.input} 
    value={email} 
    onChangeText={onChangeEmail} 
    placeholder={'Type your email'} 
  /> 
  <Pressable
    disabled={disable}
    style={[styles.button, conditionalButtonStyle]}
    onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}>
    <Text style={styles.buttonText}>
      {'Subscribe'}
    </Text>
  </Pressable>
  </View>);

};

export default SubscribeScreen;
