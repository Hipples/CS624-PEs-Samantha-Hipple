import { View, Text, StyleSheet } from 'react-native';

const Todo = ({ todo }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    todoContainer: {
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        paddingVertical: 7,
        paddingLeft: 14,
        elvation: 3,
        flexDirection: 'row',
        alignItems: 'center'        
    },
    todoText: {
        fontSize: 17
    }
});

export default Todo;