import React, {useContext} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import {NotesContext} from '../context/NotesContext';

const ListNotesScreen = () => {
  const {state, dispatch} = useContext(NotesContext);
  return (
    <View>
      <Button title="add" onPress={() => dispatch({type: 'ADD'})} />
      <Text>Notes App</Text>
      <FlatList
        data={state}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return <Text style={{fontSize: 22}}>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default ListNotesScreen;
