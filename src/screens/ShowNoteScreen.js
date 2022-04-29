import React, {useContext} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {NotesContext} from '../context/NotesContext';
import Icon from 'react-native-vector-icons/Feather';

const ShowNoteScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {state} = useContext(NotesContext);

  const note = state.find(n => n.id === id);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Edit', {id})}>
          <Icon name="edit" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 10},
  buttonContainer: {justifyContent: 'center', alignItems: 'center'},
  button: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: {fontSize: 22, textAlign: 'center'},
  content: {fontSize: 18, textAlign: 'center'},
});

export default ShowNoteScreen;
