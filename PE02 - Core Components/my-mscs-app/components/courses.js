import { useState } from 'react';
import { View, Text, Modal, Pressable, ScrollView } from 'react-native';

import Button from './button.js'
import styles from '../constants/styles.js'

//reusable custom modal component
const DisplayModal = ({ modalVisible, setModalVisible, data }) => {
    return (
        <View>
            <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(false)}}
            >
                <ScrollView contentContainerStyle={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalHeader}>
                            {data.subject}{" "}{data.key}
                        </Text>
                        <Text style={styles.modalTitle}>
                            {data.name}
                        </Text>
                        <Text style={styles.modalText}>
                            {data.description}
                        </Text>
                        <Pressable>
                            <Button onPress={() => setModalVisible(false)} title="Close"/>
                        </Pressable>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    )
}

//produces lists from data array with modals for each item
export default CourseList = ({ data }) => {
    const [modalContent, setModalContent] = useState();

    return(
        <View>
            {data.map((course, key) => {
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
                                {course.subject}{" "}{course.key}{": "}{course.name}
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

