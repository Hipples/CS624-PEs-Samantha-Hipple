import { useState } from 'react'
import { View, Text, Pressable, Modal } from 'react-native'
import { coreCourses } from '../constants/course-content.js'
import styles from '../constants/styles.js'

export const SetCourseInfo = () => {
    const [modalContent, setModalContent] = useState([])
    
    return (
        <View>
            { coreCourses.map((course) => {
                return (
                    <Pressable>
                        <Text 
                            onPress={() => {setModalContent(course)}}
                            style={styles.courses}
                        >
                            {course.type}{" "}{course.key}{": "}{course.name}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

