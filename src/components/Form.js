import React from 'react';
import {useDispatch} from "react-redux";

import {addTodo} from "../store";


const Form = () => {

    //щоб щось записати у фрму треба діспатч:
    const dispatch = useDispatch();

    const submit=(e)=>{
      e.preventDefault()
      //записуємо через action addTodo (із слайсу, з редьюсерсів):
        dispatch(addTodo({todo:e.target.todo.value}))
        e.target.reset()
    }

    return (
        <form onSubmit={submit}>
            <input type="text" name={'todo'}/>
        </form>
    );
};

export {Form};