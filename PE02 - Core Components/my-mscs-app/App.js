import { useState } from 'react';
import { ScrollView, Image, TextInput, Text, View } from 'react-native';

import styles from './constants/styles.js';
import { DepthOfStudyList } from './components/program-details.js';
import CourseList from './components/course-modal.js';

const App = () => {
  const [value, onChangeText] = useState('');
  //const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style = {styles.titleSpace}>
        <Text style = {styles.titleText}>
          City University of Seattle{'\n'}
          MSCS Program
        </Text>
      </View>

      <View style={styles.iconSpace}>
        <Image style={styles.icon}
          source={require('my-mscs-app/assets/icon.png')}
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
        <CourseList />

        <Text style={styles.header}>Depth of Study (6 credits)</Text>
        <DepthOfStudyList />

        <Text style={styles.header}>Capstone (3 credits)</Text>
        <Text style={styles.courses}>CS 687 Computer Science Capstone</Text>
      </View>

    </ScrollView>
  )
}

export default App;