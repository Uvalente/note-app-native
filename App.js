import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import NoteItem from './components/NoteItem';
import NoteInput from './components/NoteInput';

export default function App() {
 
  const [noteList, setNoteList] = useState([])

  const addNoteHandler = (noteTitle, noteBody) => {
    setNoteList(currentNoteList => [
      ...currentNoteList,
      {
        key: currentNoteList.length.toString(),
        title: noteTitle,
        body: noteBody
      }
    ])
  }

  return (
    <View style={styles.container}>
      <NoteInput
        onAddNote={addNoteHandler}
      />
      <FlatList
        data={noteList}
        renderItem={noteItem =>
          <NoteItem
            title={noteItem.item.title}
            body={noteItem.item.body}
          />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    backgroundColor: '#fff',
  }
});
