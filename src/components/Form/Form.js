import React, {useEffect} from 'react';
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux";
import {carForUpdate, createCar} from "../../store";

const Form = () => {
    const {carForUpdate} = useSelector(state => state.cars);
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();


    const submit = (data) => {
        dispatch(createCar({data}))
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;