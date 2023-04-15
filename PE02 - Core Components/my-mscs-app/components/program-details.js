import { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import { coreCourses, depthOfStudy } from '../constants/course-lists.js';
import styles from '../constants/styles.js'


// prints each course as an individual item with its own view and modal 
export const CoreList = () => {
    const [modalVisible, setModalVisible] = useState(false)

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
                            <Text>{data}{"\n\n"}</Text>
                         
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text>{"\n"}Close Modal</Text>
                        </Pressable>
                        </View>
                        </View>
                    </Modal>

                    <Pressable onPress={() => setModalVisible(true)}>
                        <Text style={styles.courses}>{data}</Text>
                    </Pressable>
                </View>
            );
        })
    );
}

export const DepthOfStudyList = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return(
        depthOfStudy.map((data, index) => {
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
                            <Text>{"\n"}Close Modal</Text>
                        </Pressable>
                        </View>
                        </View>
                    </Modal>

                    <Pressable onPress={() => setModalVisible(true)}>
                        <Text style={styles.courses}>{data}</Text>
                    </Pressable>
                </View>
            );
        })
    );
}