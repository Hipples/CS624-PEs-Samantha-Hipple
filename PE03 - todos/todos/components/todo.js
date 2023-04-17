import { View, Text, StyleSheet } from 'react-native';

import TodoButton from './todo-button';

const Todo = ({ todo, toggleComplete, deleteTodo }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <TodoButton
                name="Done"
                complete={todo.complete}
                onPress={() => toggleComplete(todo.todoIndex)} />
            <TodoButton
                name="Delete"
                onPress={() => deleteTodo(todo.todoIndex)} />
        </View>
    </View>
); 

const styles = StyleSheet.create({
    todoContainer: {
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderColor: '#EDEDED',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        paddingVertical: 7,
        paddingLeft: 14,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center'        
    },
    todoText: {
        fontSize: 17
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default Todo;