import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: 'pink' }}>
      <Text
        style={{
          padding: 10,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
