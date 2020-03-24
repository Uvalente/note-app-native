import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Add a note title:</Text>
        <TextInput style={styles.noteInput} placeholder='Title' />
      </View>
      <View>
        <Text>Add a note body:</Text>
        <TextInput style={styles.noteInput} placeholder='Body' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  noteInput :{
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5
  }
});
