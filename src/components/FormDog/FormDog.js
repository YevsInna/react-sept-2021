import React from 'react';
import {useForm} from "react-hook-form";

const FormDog = ({addDog}) => {
    let {register, handleSubmit, reset} = useForm();

    const submit = (data)=>{
        addDog(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Add dog <input type="text" {...register('dogs')}/></label>
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
};

export default FormDog;