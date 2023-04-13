import { useState } from 'react';
import { ScrollView, Image, TextInput, Text, View } from 'react-native';

import styles from './constants/styles.js';
import { CoreList, DepthOfStudyList } from './components/program-details.js';

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
        {/* <Text style={styles.courses}>
          CS 504 Software Engineering{'\n'}
          CS 506 Programming for Computing{'\n'}
          CS 519 Cloud Computing Overview{'\n'}
          CS 533 Computer Architecture{'\n'}
          CS 547 Secure Systems and Programs{'\n'}
          CS 622 Discrete Math and Algorithms for Computing{'\n'}
          DS 510 Artificial Intelligence for Data Science{'\n'}
          DS 620 Machine Learning & Deep Learning
        </Text> */}

        <CoreList />

        <Text style={styles.header}>Depth of Study (6 credits)</Text>

        <DepthOfStudyList />

        <Text style={styles.header}>Capstone (3 credits)</Text>
        <Text style={styles.courses}>CS 687 Computer Science Capstone</Text>
      </View>

    </ScrollView>
  )
}

export default App;