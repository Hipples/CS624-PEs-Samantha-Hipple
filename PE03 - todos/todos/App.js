import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Heading from './components/heading';
import Input from './components/input';
import Button from './components/button';
import TodoList from './components/todo-list';
import TabBar from './components/tab-bar';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }
  //function to track user input
  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({inputValue});
  }
  //function to add user input to todo list
  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return 
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log(' State: ', this.state)
    });
  }
  //function to delete a todo list item
  deleteTodo (todoIndex) {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }
  //function to mark todo list item as 'complete'
  toggleComplete (todoIndex) {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    });
    this.setState({ todos });
  }
  //function to set type? --> tab bar at the bottom of the app
  setType (type) {
    this.setState({ type });
  }
  //function to render main Application
  render() {
    const { inputValue, todos, type } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <StatusBar />
          <Heading />
          <Input 
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <TodoList 
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

//styles for main App views
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'  //off-white
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;