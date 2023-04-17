import { Text, Pressable, StyleSheet } from 'react-native';

const TodoButton = ({ onPress, complete, name }) => (
    <Pressable
        onPress={onPress}
        style={({pressed}) => [
            styles.button, 
            pressed ? styles.pressed : styles.default]}              
    >
        <Text style={[styles.text,
                    complete ? styles.complete : null,
                    name === 'Delete' ? styles.deleteButton : null]}>
            {name}
        </Text>
    </Pressable>
);