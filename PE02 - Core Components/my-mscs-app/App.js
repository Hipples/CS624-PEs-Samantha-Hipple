import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, TextInput, Text, View } from 'react-native';

const App = () => {
  const [value, onChangeText] = React.useState('ex. CS 624')

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto"/>

      <View style={{alignItems: 'center', margin: 50}}>
        <Image
          source={require('my-mscs-app/assets/icon.png')}
          style={{width: 300, height: 300}}
        />
      </View>

      <View style={styles.question}>
        <Text>Which course did you like best?</Text>
        
        <TextInput
          editable
          onChangeText={text => onChangeText(text)}
          value={value}
        >

        </TextInput>
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
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  icon: {},
  question: {
    flex: .15,
    backgroundColor: "white",
  },
  answer: {},
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    textAlign: 'center',
  },
  courses: {
    fontSize: 15,
    lineHeight: 30,
    includeFontPadding: 20
  }
});

export default App;