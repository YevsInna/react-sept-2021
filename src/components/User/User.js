import React from 'react';

const User = (props) => {
    const {id, name, username, email, phone, website} = props;

    return (
        <div>
            <p>{id}. Name - {name}, username - {username}.</p>
            <p>Email: {email}, phone: {phone}, website: {website}.</p>
        </div>
    );
};

export default User;