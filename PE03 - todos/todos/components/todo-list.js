import { View } from 'react-native';

import Todo from './todo';

const TodoList ({ todos }) => {
    todos = todos.map((todo, i) => {
        return (
            <Todo
                key={todo.todoIndex}
                todo={todo} />
        );
    });
    return (
        <View>
            {todos}
        </View>
    );
}

export default Todo;