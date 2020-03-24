import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredNoteTitle, setEnteredNoteTitle] = useState('')
  const [enteredNoteBody, setEnteredNoteBody] = useState('')
  const [noteList, setNoteList] = useState([])

  const titleInputHandler = enteredTitle => {
    setEnteredNoteTitle(enteredTitle)
  }

  const bodyInputHandler = enteredBody => {
    setEnteredNoteBody(enteredBody)
  }

  const addNoteHandler = () => {
    setNoteList(currentNoteList => [
      ...currentNoteList,
      {
        key: currentNoteList.length.toString(),
        title: enteredNoteTitle,
        body: enteredNoteBody
      }
    ])
  }

  return (
    <View style={styles.container}>
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
      <View>
        <Button
          title='ADD'
          onPress={addNoteHandler}
        />
      </View>
      <FlatList
        data={noteList}
        renderItem={noteItem => (
          <View>
            <Text>{noteItem.item.key}</Text>
            <Text>{noteItem.item.title}</Text>
            <Text>{noteItem.item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  noteInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5
  }
});
