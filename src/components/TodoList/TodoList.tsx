import React, {FC} from 'react';
import {ITodo} from "../../types/data";
import TodoItem from "../TodoItem/TodoItem";

interface ItodosList {
    todos: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void
}

const TodoList: FC<ItodosList> = ({todos, removeTodo, toggleTodo}) => {

    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                ))
            }
        </ul>
    );
};

export default TodoList;