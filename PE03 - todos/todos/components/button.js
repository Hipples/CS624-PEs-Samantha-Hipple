import { View, Text, Pressable, StyleSheet } from 'react-native';

const Button = ({ submitTodo }) => (
    <View style={styles.buttonContainer}>
        <Pressable
            onPress={submitTodo}
            style={({pressed}) => [
                styles.button, 
                pressed ? styles.pressed : styles.default]}              
        >
                <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        marginVertical: 15,
        width: "55%",
        marginRight: 20,
        alignSelf: 'flex-end'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        elevation: 3
    },
    pressed: {
        backgroundColor: '#EFEFEF'
    },
    default: {
        backgroundColor: 'white'
    },
    buttonText: {
        fontWeight: 600,
        color: '#666666'
    }
})

export default Button;