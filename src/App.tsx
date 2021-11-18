import React, {FC, useState} from 'react';
import {ITodo} from "./types/data";
import InputTodo from "./components/InputTodo/InputTodo";
import TodoList from "./components/TodoList/TodoList";


const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [value, setValue] = useState('')

    const handleValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const addTodo: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if(value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                completed: false
            }])
            setValue('')
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo
            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    return (
        <div>
            <h1>Todo List with typescript</h1>
            <InputTodo handleValue={handleValue} addTodo={addTodo} value={value}/>
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default App;