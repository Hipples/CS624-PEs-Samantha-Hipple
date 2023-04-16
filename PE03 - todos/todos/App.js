import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Heading from '.components/heading';
import Input from '.components/input'

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({inputValue});
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
            inputChange={text => this.inputChange(text)}
          />
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