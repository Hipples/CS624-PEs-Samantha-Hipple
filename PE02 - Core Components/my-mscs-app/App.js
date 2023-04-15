import { useState } from 'react';
import { ScrollView, Image, TextInput, Text, View, StatusBar } from 'react-native';

import { coreCourses, depthOfStudyCourses, capstoneCourse } from './constants/course-content.js';
import CourseList from './components/courses.js'
import styles from './constants/styles.js';


const App = () => {
  const [text, onChangeText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar/>

      {/*Title section*/}
      <View style = {styles.titleSpace}>
        <Text style = {styles.titleText}>
          City University of Seattle{'\n'}
          MSCS Program
        </Text>
      </View>

      {/*Icon section*/}
      <View style={styles.iconSpace}>
        <Image style={styles.icon}
          source={require('./assets/icon.png')}
        />
      </View>

      {/*Input section*/}
      <View style={styles.questionSpace}>
        <Text style={styles.questionText}>Which course did you like best?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="ex. CS 624"
        />
      </View>

      {/*Course list section*/}
      <View>
        <Text style={styles.header}>Core Requirements (24 credits)</Text>
        <CourseList data={coreCourses} />

        <Text style={styles.header}>Depth of Study (6 credits)</Text>
        <CourseList data={depthOfStudyCourses} />

        <Text style={styles.header}>Capstone (3 credits)</Text>
        <CourseList data={capstoneCourse} />
      </View>

    </ScrollView>
  )
}

export default App;