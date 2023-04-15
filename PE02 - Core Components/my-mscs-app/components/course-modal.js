import { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import { coreCourses } from '../constants/course-content.js';
import styles from '../constants/styles.js'


const DisplayModal = ({ modalVisible, setModalVisible, data }) => {
    return (
        <View>
            <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(false)}}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>{data.type}{" "}{data.key}{": "}{data.name}{"\n\n"}</Text>
                        <Text>{data.description}{"\n\n"}</Text>
                        <Pressable>
                            <Text onPress={() => setModalVisible(false)}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CourseList = () => {
    //const [modalVisible, setModalVisible] = useState();
    const [modalContent, setModalContent] = useState();

    return(
        <View>
            {coreCourses.map((course, key) => {
                const id = key.toString();
                return (
                    <View key={id}>
                        <Pressable>
                            <Text 
                                onPress={() => {
                                    setModalContent(id);
                                    }
                                }
                                style={styles.courses}
                            >
                                {course.type}{" "}{course.key}{": "}{course.name}
                            </Text>
                            <DisplayModal 
                                setModalVisible={setModalContent}
                                modalVisible={modalContent === id}
                                data={course}/>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    )    
}

