import React from 'react';
import User from "../User/User";

const Users = ({users}) => {

    return (
        <div>
            {
                users.map(user=><User key={users.id} user={user}/>)
            }
        </div>
    );
};

export default Users;