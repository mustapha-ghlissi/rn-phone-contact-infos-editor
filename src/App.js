/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contacts from './screens/Index';
import Edit from './screens/Edit';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts}
          options={{title: 'Contacts list'}}
        />
        <Stack.Screen name="Edit" component={Edit}
          options={({ route }) => ({ title: route.params.contact.displayName ?? 'Edit contact' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
