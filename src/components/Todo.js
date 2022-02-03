import React from 'react';
import {useDispatch} from "react-redux";

import './style.css'
import {changeStatus, deleteTodo} from "../store";


const Todo = ({todo}) => {
    const {id, name, status} = todo;
    const dispatch = useDispatch();

    return (
        <div className={'todo'}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status ? 'done' : ''}>{name}</div>
            <button onClick={() => dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export {Todo};