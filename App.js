import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ListNotesScreen from './src/components/ListNotesScreen';
import {NotesContext} from './src/context/NotesContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={ListNotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <NotesContext.Provider value={10}>
      <App />
    </NotesContext.Provider>
  );
};
