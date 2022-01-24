import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import '../style.css'
import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";


const Form = ({update}) => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});

    // data - нова машина, яку вносимо в базу
    //при відправці на сераер вернеться ця ж машина уже з ID, може прийти помилка
    // const submit = (data) => {
    //     carService.create(data).then(value => console.log(value)).catch(error => {
    //         setFormError(error.response.data);
    //
    //     })
    // }

    const submit = async (car) => {
        try {
            const newCar = await carService.create(car);
            update(newCar)
        } catch (error) {
            setFormError(error.response.data);
        }

    }


// watch(event=> console.log(event))

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};