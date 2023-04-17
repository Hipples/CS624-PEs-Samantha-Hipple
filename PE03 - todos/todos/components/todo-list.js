import { View } from 'react-native';

import Todo from './todo';

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
    //setType filter logic for TabBar
    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos
            case 'Complete':
                return todos.filter((t) => t.complete)
            case 'Active':
                return todos.filter((t) => !t.complete)
        }
    }
    //display todos based on filter setting (all, complete, or active)
    todos = getVisibleTodos(todos, type);
    //each todo item includes delete and done buttons
    todos = todos.map((todo, i) => {
        return (
            <Todo
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                key={i}
                todo={todo} />
        );
    });
    //display the list
    return (
        <View>
            {todos}
        </View>
    );
}

export default TodoList;