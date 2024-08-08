import * as React from 'react';
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeText from './components/WelcomeText';
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
        }}>
        <LittleLemonHeader />
        <WelcomeText />
      </View>
      <View style={{ backgroundColor: 'blue' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
