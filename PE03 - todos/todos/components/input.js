import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ inputValue, inputChange }) => (
    <View style={styles.inputContainer}>
        <TextInput
            value={inputValue}
            style={styles.input}
            placeholder="What needs to be done?"
            placeholderTextColor="#CACACA"
            selectionColor="#666666"
            onChangeText={inputChange}
        />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 20,
    },
    input: {
        height: 60,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        borderRadius: 3
    }
});

export default Input;