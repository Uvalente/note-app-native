import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const NoteInput = props => {
  return (
    <View>
      <Text>{props.text}</Text>
      <TextInput
        style={styles.noteInput}
        placeholder={props.placeholder}
        onChangeText={props.textInputHandler}
        value={props.enteredNoteText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  noteInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default NoteInput