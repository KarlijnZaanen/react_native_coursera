import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View
        style={appStyles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={appStyles.footer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const appStyles = StyleSheet.create({
  container: {
          flex: 1,
          backgroundColor: 'pink',
        },
  footer: { backgroundColor: 'pink' },
});
