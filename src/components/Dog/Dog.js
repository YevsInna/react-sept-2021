import React from 'react';

import '../style.css'

const Dog = ({dog, deleteDog}) => {


    return (
        <div className={'pet'}>
            <div>{dog}</div>
            <button onClick={()=>deleteDog(dog)}>Delete</button>
        </div>
    );
};

export default Dog;