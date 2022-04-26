import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {NotesContext} from '../context/NotesContext';

const ListNotesScreen = () => {
  const data = useContext(NotesContext);
  return (
    <View>
      <Text>Notes App</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default ListNotesScreen;
