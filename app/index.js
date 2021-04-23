import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {enableScreens} from 'react-native-screens'
import Contacts from './screens/Contacts';
import Details from './screens/Details'
import {ContactsStack} from './config/router'

const App = () => {

  enableScreens()

  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) ;
};

export default App;
