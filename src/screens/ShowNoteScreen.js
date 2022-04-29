import React, {useContext} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {NotesContext} from '../context/NotesContext';

const ShowNoteScreen = ({route}) => {
  const {id} = route.params;
  const {state} = useContext(NotesContext);

  const note = state.find(n => n.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 10},
  title: {fontSize: 22, textAlign: 'center'},
  content: {fontSize: 18, textAlign: 'center'},
});

export default ShowNoteScreen;
