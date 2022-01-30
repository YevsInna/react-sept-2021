import React from 'react';

import '../style.css'

const Cat = ({cat, deleteCat}) => {


    return (
        <div className={'pet'}>
            <div>{cat}</div>
            <button onClick={()=>deleteCat(cat)}>Delete</button>
        </div>
    );
};

export default Cat;