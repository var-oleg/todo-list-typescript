import React, {FC} from 'react';

interface IInputTodo {
    value: string;
    addTodo: React.MouseEventHandler<HTMLButtonElement>;
    handleValue:  React.ChangeEventHandler<HTMLInputElement>
}

const InputTodo:FC<IInputTodo> = ({addTodo, handleValue, value}) => {
    return (
        <form>
            <input onChange={handleValue} value={value} type="text" placeholder='enter you todo'/>
            <button onClick={addTodo}>Add Todo</button>
        </form>
    );
};

export default InputTodo;