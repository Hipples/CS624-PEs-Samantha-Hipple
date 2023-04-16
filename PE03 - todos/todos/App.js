import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Heading from './components/heading';
import Input from './components/input';
import Button from './components/button';
import Todos from './components/todos';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
  }
  //function to track user input
  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({inputValue});
  }
  //function to save user input to todo list
  submitTodo() {
    if (this.state.inputValue.match(/^\s*/)) { 
      return 
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: ''}, () => {
      console.log('State: ', this.state)
    })
  }

  render() {
    const {inputValue} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <StatusBar />
          <Heading />
          <Input 
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          <Button />
          <Todos />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;