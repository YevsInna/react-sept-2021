import React from 'react';
import {useSelector} from "react-redux";
import {Todo} from "./Todo";

const Todos = () => {
    const {todos} = useSelector(state => state.todo);

    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {Todos};