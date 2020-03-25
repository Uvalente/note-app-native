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
    marginVertical: 2
  }
})

export default NoteItem;
