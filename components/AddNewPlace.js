import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const InsertMyPlace = ({onAddMyPlaces}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddMyPlaces(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="New Place"
        value={newTodoItem}
        onChangeText={todoInputHandler}
        placeholderTextColor={'#b9aaa2'}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 2,
    padding: 20,
    borderBottomWidth: 2,
    fontSize: 35,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default InsertMyPlace;