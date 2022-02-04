import React from 'react';
import {useSelector} from "react-redux";

const Counter = () => {

    const {all, completed} = useSelector(state => state.todo);


    return (

        <div>
            <h3>All: {all}</h3>
            <h3>Completed: {completed}</h3>
        </div>
    );
};

export {Counter};