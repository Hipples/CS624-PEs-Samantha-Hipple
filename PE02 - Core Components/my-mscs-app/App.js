import { useState } from 'react';
import { StyleSheet, ScrollView, Image, TextInput, Text, View } from 'react-native';

import { Pressable, Modal } from 'react-native';

const App = () => {
  const [value, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const coreCourses = [
    "CS 504 Software Engineering",
    "CS 506 Programming for Computing",
    "CS 519 Cloud Computing Overview",
    "CS 533 Computer Architecture",
    "CS 547 Secure Systems and Programs",
    "CS 622 Discrete Math and Algorithms for Computing",
    "DS 510 Artificial Intelligence for Data Science",
    "DS 620 Machine Learning & Deep Learning"
  ]

  const depthOfStudy = [
    "CS 624 Full-Stack Development - Mobile App",
    "CS 628 Full-Stack Development - Web App"
  ]

  const CoreList = () => {
    return(
      coreCourses.map((data, index) => {
        return(
          <View key={index}>
            <Modal
              animationType='none'
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {setModalVisible(false)}}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text>{data}{"\n"}</Text>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Text>
                    {"\n"}Close Modal
                  </Text>
                </Pressable>
              </View>
              </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.courses}>{data}</Text>
            </Pressable>
          </View>
        )
      })
    )
  }

  const DepthList = () => {
    return(
      depthOfStudy.map((data, index) => {
        return(
          <View key={index}>
            <Pressable
              onPress={() => {}}
            >
              <Text style={styles.courses}>{data}</Text>
            </Pressable>
          </View>
        )
      })
    )
  }


  
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
        {/* <Text style={styles.courses}>
          CS 624 Full-Stack Development - Mobile App{'\n'}
          CS 628 Full-Stack Development - Web App
        </Text> */}
        <DepthList />

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
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  }
});

export default App;