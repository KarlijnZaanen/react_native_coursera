import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import useUpdate from './useUpdate';

export default function App() {
  const [preferences, setPreferences] = React.useState({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false,
  });

  const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

  // This effect only runs when the preferences state updates, excluding initial mount:
  useUpdate(() => { 
    (async () => {
    try{
      console.log("Writing altered settings in the database")
      // Use AsyncStorage.multiSet API to persist each preference under a separate key.
      const preferences_as_object_of_strings = {
          "pushNotifications": preferences.pushNotifications.toString(),
          "emailMarketing": preferences.emailMarketing.toString(),
          "latestNews": preferences.latestNews.toString(),
      }
      console.log(preferences_as_object_of_strings);
      const preferences_as_array_of_strings = Object.entries(preferences_as_object_of_strings);
      console.log(preferences_as_array_of_strings);
      AsyncStorage.multiSet(preferences_as_array_of_strings) 
    } catch(e) {
      Alert.alert(`An error occurred: ${e.message}`); 
    }
    })(); 
  }, [preferences]); 

  React.useEffect(() => { 
    (async () => { 
    try{
       console.log("Uploading saved preferences from earlier session")
       // Populate preferences from storage using AsyncStorage.multiGet
       const stored_preferences_array_of_strings = await AsyncStorage.multiGet(Object.keys(preferences));
       console.log(stored_preferences_array_of_strings)
       // convert the values from strings to boolean and convert to an object:
       const stored_preferences_bools = {}

       for (var i = 0; i < stored_preferences_array_of_strings.length; i++) {
           the_key = stored_preferences_array_of_strings[i][0];
           the_value = stored_preferences_array_of_strings[i][1];
           console.log(the_key)
           console.log(the_value)
           stored_preferences_bools[the_key] = (the_value === "true")
       }
       console.log(stored_preferences_bools)
       setPreferences(stored_preferences_bools);
    } catch(e) {
      Alert.alert(`An error occurred: ${e.message}`);
    }
     })(); 
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.row}>
        <Text>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.row}>
        <Text>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
