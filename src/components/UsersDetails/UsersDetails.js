import React from 'react';

const UsersDetails = ({user, getUserId}) => {                                              //8.отримали юзера, деструктур.його
    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div>
            <div>
                <h3>{id} {name}, user name is {username}</h3>
                <p>Email: {email}</p>
                <p>Address: {address?.street} street, {address?.city} city.</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <p>Company: {company?.name}</p>
            </div>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UsersDetails;

