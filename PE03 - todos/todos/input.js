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
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000',
        shadowOffSet: {width: 2, height: 2}        
    },
    input: {
        height: 60,
        backgroundColor: '#FFF',
        paddingHorizontal: 10
    }
});

export default Input;