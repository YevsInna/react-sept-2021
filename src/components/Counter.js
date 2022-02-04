import React from 'react';
import {useSelector} from "react-redux";

const Counter = () => {

    // const {all, completed} = useSelector(state => state.todo);
    const {todos, completed} = useSelector(state => state.todo);


    return (

        <div>
            <h3>All: {todos.length}</h3>
            <h3>Completed: {completed}</h3>
        </div>
    );
};

export {Counter};