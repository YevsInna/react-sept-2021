import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {updateCar, deleteCarThunk, updateCarThunk} from "../../store/car.slice"
import './style.css'

const Car = ({car}) => {
    const  {id,model,price,year} = car;
    const dispatch = useDispatch();

    return (
        <div className={'car'}>

            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
            <button onClick={()=>dispatch(updateCarThunk({car}))}>Update</button>
        </div>
    );
};

export {Car};