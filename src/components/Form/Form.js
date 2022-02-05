import React, {useEffect} from 'react';
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux";

import {addCar, updateCar, updateCarThunk} from "../../store";
import './style.css'

import {carService} from "../../services";
import store from "../../store/store.config";

const Form = () => {

    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();

    const {carForUpdate: id} = useSelector(store=>store['carReducer']);

    const submit = (data) => {

        if(id){
            dispatch(updateCarThunk({id,data}))
        }
        dispatch(addCar({data}))
        reset()
    }

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {Form};