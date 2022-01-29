import React from 'react';
import {useForm} from "react-hook-form";


const FormCat = ({addCat}) => {
    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        addCat(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Add cat <input type="text" {...register('cats')}/></label>
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
};

export default FormCat;