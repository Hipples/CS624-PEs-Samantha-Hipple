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

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#EDEDED',
        borderWidth: 1,
        burderRaidus: 4,
        marginRight: 5
    },
    default: { },
    pressed: { },
    text: {
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    }
});

export default TodoButton;