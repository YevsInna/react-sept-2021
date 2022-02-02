import React, {useEffect} from 'react';
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux";
import {addCar, createCar} from "../../store";
import {carService} from "../../services";

const Form = () => {
    // const {carForUpdate} = useSelector(state => state.cars);
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();


    const submit = (data) => {
        dispatch(createCar({data}))
        reset()
    }

    // const submit = async (car) => {
    //    try {
    //      let newCar;
    //      if(id){
    //          newCar= await carService.updateById(id,car);
    //      }else{
    //          newCar = await carService.create(car);
    //      }updateCar(newCar)
    //    }catch (e){
    //        console.log(e)
    //    }
    // }

    // useEffect(() => {
    //     if (carForUpdate) {
    //         setValue('model', carForUpdate.model)
    //         setValue('price', carForUpdate.price)
    //         setValue('year', carForUpdate.year)
    //     }
    // }, [carForUpdate]);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>Save</button>
                {/*<button>{id ? 'Update' : 'Create'}</button>*/}
            </form>
        </div>
    );
};

export default Form;