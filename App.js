import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home.js';
import Events from './src/screens/Events.js';
import CreateEvent from './src/screens/CreateEvent.js'; 
import ViewAllEvents from './src/screens/ViewAllEvents'; 
import ViewAnEvent from './src/screens/ViewAnEvent'; 
import { ItemProvider } from './src/screens/contexts/ItemContext.js';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditItem from './src/screens/EditItem.js';

export default function App() {
  const Stack =createNativeStackNavigator();
  return (
    <ItemProvider>
    <Text style={styles.heading} >Gordon's 18 Club </Text>
    <NavigationContainer>
      <Stack.Navigator initialRouteName ='home'>
       <Stack.Screen
       name='Home'
       component={Home}
       options={{title: "Home Page"}}
      />
       <Stack.Screen
       name='Edit'
       component={EditItem}
       options={{title: "Edit Item"}}
      />
      <Stack.Screen
       name='View'
       component={ViewAnEvent}
       options={{title: "View one event bruv"}}
      />
      <Stack.Screen
       name='Events'
       component={Events}
       options={{title: "Events Page"}}
      />
      <Stack.Screen
       name='CreateEvent'
       component={CreateEvent}
       options={{title: "Create Events Page"}}
      />
      <Stack.Screen
       name='ViewAllEvents'
       component={ViewAllEvents}
       options={{title: "View All Events"}}
      />
      </Stack.Navigator>
    </NavigationContainer>
    </ItemProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    padding:30 ,
    textAlign: 'center',
    fontSize:30,
    fontWeight: "bold",
    color:"green"
  }
});
