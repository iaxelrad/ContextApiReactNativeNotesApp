import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {NotesContext} from '../context/NotesContext';

const EditNoteScreen = ({navigation, route}) => {
  const {id} = route.params;

  const {state, dispatch} = useContext(NotesContext);
  const note = state.find(n => n.id === id);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Update Title:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.text}>Update Content:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={setContent}
        numberOfLines={3}
        multiline
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch({type: 'ADD', payload: {title, content}});
          navigation.goBack();
        }}>
        <Text style={[styles.text, styles.whiteText]}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  container: {flex: 1, margin: 8},
  text: {fontSize: 22},
  whiteText: {color: 'white', textAlign: 'center'},
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
  },
});
