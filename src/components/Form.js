import React from 'react';
import {useDispatch} from "react-redux";

import {addTodo,allInc} from "../store";
import './style.css'


const Form = () => {

    //щоб щось записати у фрму треба діспатч:
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault()
        //записуємо через action addTodo (із слайсу, з редьюсерсів):
        dispatch(addTodo({todo: e.target.todo.value}))
        // dispatch(allInc())
        e.target.reset()
    }

    return (
        <form className={'form'} onSubmit={submit}>
            <input type="text" name={'todo'}/>
            <button>Save</button>
        </form>
    );
};

export {Form};