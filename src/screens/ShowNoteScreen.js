import React, {useContext} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const ShowNoteScreen = ({route}) => {
  const {id} = route.params;
  return (
    <View>
      <Text>Show Note</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default ShowNoteScreen;
