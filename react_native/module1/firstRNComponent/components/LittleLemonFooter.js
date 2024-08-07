import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{ marginBottom: 10, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 20,
          fontSize: 10,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}


