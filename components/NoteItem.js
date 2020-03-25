import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const NoteItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.noteKey)}
    >
      <View style={styles.noteContainer} >
        <Text>{props.title}</Text>
        <Text>{props.body}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  noteContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10
  }
})

export default NoteItem;
