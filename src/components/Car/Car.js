import React from 'react';

import '../style.css'

const Car = ({car}) => {
    const {id, model, price, year} = car;

    return (
        <div className={'car'}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {Car};