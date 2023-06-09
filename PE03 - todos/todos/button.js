import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = ({ submitTodo }) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
            underlayColor='EFEFEF'
            style={styles.button}
            onPress={submitTodo}>
            <Text style={styles.submit}>
                Submit
            </Text>
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#666',
        fontWeight: '600'
    }
});

export default Button;