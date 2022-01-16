import React from 'react';

import css from './User.module.css'

const User = ({user, getUser}) => {  //4.відловили гетюзер, передали в кнопку на онклік через функцію, яка запускає ф-ю гетюзер
    const {id, name, username} = user;  //5.у ф-ю передаємо юзера, по кнопці якого клікнули
                                        //6.далі цей юзер піднімається в Апп в гетюзер

    return (
        <div>
            <div className={css.wrap}>
                <div className={css.name}>
                    <h3>{id}. {name}</h3>
                </div>
                <button onClick={() => getUser(user)}>Details</button>
            </div>
        </div>
    );
};

export default User;