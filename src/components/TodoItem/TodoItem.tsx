import React, {FC} from 'react';
import {ITodo} from "../../types/data";
interface ITodoItem extends ITodo{
    toggleTodo: (id: number) => void;
    removeTodo: (id:number) => void
}
const TodoItem: FC<ITodoItem> = ({toggleTodo, removeTodo, id, completed, title}) => {
    return (
        <li key={id}>
            <input onChange={() => toggleTodo(id)} type="checkbox" checked={completed}/>
            <span>{title}</span>
            <button onClick={() => removeTodo(id)}>Remove todo</button>
        </li>
    );
};

export default TodoItem;