import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carToUpdate,deleteCarThunk} from "../../store/car.slice"
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
            <button onClick={()=>dispatch(carToUpdate({car}))}>Update</button>
        </div>
    );
};

export default Car;