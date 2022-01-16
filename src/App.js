import React, {useState} from 'react';

import './App.css'
import Users from "./components/Users/Users";
import UsersDetails from "./components/UsersDetails/UsersDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'

const App = () => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)   //щоб зникали пости
    };
    const getUserId = (id) => {
        setUserId(id)
    };
    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                <div className={css.details}>
                    {user && <UsersDetails user={user} getUserId={getUserId}/>}
                </div>
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export default App;
//1.в цей стейт запишеться один вибраний юзер              c.11
//2.getUser  витягне одного юзера по кнопці(детейлз),
// перекидаємо її компоненту Юзерс  і відловлюємо в Юзерс.джс
//7.засетали юзера, передали в ЮзерДетейлз, там приймаэмо
//  коли useState (null), треба сказати, що коли є user тільки тоді рендериться компонента {user && <UsersDetails user={user}/>}