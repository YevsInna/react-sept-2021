import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {deleteCar, deleteCarThunk, updateCar} from "../../store";
import './style.css'

const Car = ({car:{id,model,price,year}}) => {
    const dispatch = useDispatch();

    return (
        <div className={'car'}>

            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
            <button onClick={()=>dispatch(updateCar({id}))}>Update</button>
        </div>
    );
};

export default Car;