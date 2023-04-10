import React from 'react';
import { StyleSheet, ScrollView, Image, TextInput, Text, View } from 'react-native';

const App = () => {
  const [value, onChangeText] = React.useState('')

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style = {styles.titleSpace}>
        <Text style = {styles.title}>
          City University of Seattle{'\n'}
          MSCS Program
        </Text>
      </View>

      <View style={styles.icon}>
        <Image
          source={require('my-mscs-app/assets/icon.png')}
          style={{width: 300, height: 300}}
        />
      </View>

      <View style={styles.question}>
        <Text style={{fontSize: 18, color: 'white', padding: 5}}>Which course did you like best?</Text>
        <TextInput
          style = {styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder="ex. CS 624"/>
      </View>

      <View>
        <Text style={styles.header}>Core Requirements (24 credits)</Text>
        <Text style={styles.courses}>
          CS 504 Software Engineering{'\n'}
          CS 506 Programming for Computing{'\n'}
          CS 519 Cloud Computing Overview{'\n'}
          CS 533 Computer Architecture{'\n'}
          CS 547 Secure Systems and Programs{'\n'}
          CS 622 Discrete Math and Algorithms for Computing{'\n'}
          DS 510 Artificial Intelligence for Data Science{'\n'}
          DS 620 Machine Learning & Deep Learning
        </Text>
        <Text style={styles.header}>Depth of Study (6 credits)</Text>
        <Text style={styles.courses}>
          CS 624 Full-Stack Development - Mobile App{'\n'}
          CS 628 Full-Stack Development - Web App
        </Text>
        <Text style={styles.header}>Capstone (3 credits)</Text>
        <Text style={styles.courses}>CS 687 Computer Science Capstone</Text>
      </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02b5c2',  //teal
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 3,
    borderColor: '#fc03df'
  },

  titleSpace: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    textAlign: 'center'
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },

  question: {
    backgroundColor: "#02025c",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    marginVertical: 10,
    borderColor: '#fc03df'
  },

  input: {
    height: 40,
    marginHorizontal: 10,
    marginBottom: 5,
    borderWidth: 1, 
    padding: 10,
    backgroundColor: 'white'
  },

  header: {
    color: '#fc03df',  //pink
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#02025c',  //marine
    textAlign: 'center',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    lineHeight: 50,
    marginTop: 10,
    borderStyle: 'dashed',
    borderColor: '#fc03df'
  },

  courses: {
    fontSize: 15,
    color: 'white',
    marginTop: 5,
    lineHeight: 30
  }
});

export default App;