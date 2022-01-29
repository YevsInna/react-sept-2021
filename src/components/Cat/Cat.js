import React from 'react';

const Cat = ({cat, deleteCat}) => {
const{id} = cat;
    return (
        <div>
            <div>{cat}</div>
            <button onClick={()=>deleteCat(id)}>Delete</button>
        </div>
    );
};

export default Cat;