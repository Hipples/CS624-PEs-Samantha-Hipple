import { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import styles from '../constants/styles.js'

//reusable custom button component
const Button = (props) => {
    const { onPress, title = "Close" } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

//reusable custom modal component
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
                        <Text>{data.subject}{" "}{data.key}{": "}{data.name}{"\n\n"}</Text>
                        <Text>{data.description}{"\n\n"}</Text>
                        <Pressable>
                            <Button onPress={() => setModalVisible(false)} title="Close"/>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

//produces course lists from data array with modals for each item
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

