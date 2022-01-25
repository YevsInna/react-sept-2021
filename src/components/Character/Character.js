import React from 'react';

const Character = ({character}) => {
    const {id,name,status, species, gender,image} = character;
    return (
        <div>
            {id}-{name}
        </div>
    );
};

export {Character};