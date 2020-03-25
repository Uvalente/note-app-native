import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const NoteItem = props => {
  return (
    <View style={styles.noteContainer} >
      <Text>{props.title}</Text>
      <Text>{props.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  noteContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertica: 10
  }
})

export default NoteItem;
