import React, {useContext} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {NotesContext} from '../context/NotesContext';
import Icon from 'react-native-vector-icons/AntDesign';

const ListNotesScreen = ({navigation}) => {
  const {state, dispatch} = useContext(NotesContext);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Create')}>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text>Notes App</Text>
      <FlatList
        data={state}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item.title}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => dispatch({type: 'DELETE', payload: item.id})}>
                <Icon name="delete" size={24} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListNotesScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
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
  deleteButton: {
    // backgroundColor: 'blue',
    // width: 50,
    // height: 50,
    // borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  text: {fontSize: 22},
});
