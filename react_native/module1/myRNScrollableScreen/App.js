import * as React from 'react';
import { ScrollView, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeText from './components/WelcomeText';
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 0.1,
          backgroundColor: 'yellow',
        }}>
        <LittleLemonHeader />
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'green',
        }} indicatorStyle={'white'}>
        <WelcomeText />
      </ScrollView>
      <View style={{ backgroundColor: 'blue' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
