import React from 'react';

import '../style.css'
import {carService} from "../../services/car.service";

const Car = ({car, update, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        update({})

    }

    return (
        <div className={'car'}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>
        </div>
    );
};

export {Car};