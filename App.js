import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NotesProvider} from './src/context/NotesContext';
import ListNotesScreen from './src/screens/ListNotesScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Notes"
          options={{
            headerTitleAlign: 'center',
            title: 'All Notes',
          }}
          component={ListNotesScreen}
        />
        <Stack.Screen
          name="Create"
          options={{
            headerTitleAlign: 'center',
            title: 'Create Note',
          }}
          component={CreateNoteScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <NotesProvider>
      <App />
    </NotesProvider>
  );
};
