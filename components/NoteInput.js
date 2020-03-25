import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const NoteInput = props => {
  const [enteredNoteTitle, setEnteredNoteTitle] = useState('')
  const [enteredNoteBody, setEnteredNoteBody] = useState('')

  const titleInputHandler = enteredTitle => {
    setEnteredNoteTitle(enteredTitle)
  }

  const bodyInputHandler = enteredBody => {
    setEnteredNoteBody(enteredBody)
  }
  return (
    <View>
      <View>
        <Text>Add a note title:</Text>
        <TextInput
          style={styles.noteInput}
          placeholder='Title'
          onChangeText={titleInputHandler}
          value={enteredNoteTitle}
        />
      </View>
      <View>
        <Text>Add a note body:</Text>
        <TextInput
          style={styles.noteInput}
          placeholder='Body'
          onChangeText={bodyInputHandler}
          value={enteredNoteBody}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='ADD'
          onPress={props.onAddNote.bind(this, enteredNoteTitle, enteredNoteBody)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  noteInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5
  },
  button: {
    marginTop: 10
  }
})

export default NoteInput
