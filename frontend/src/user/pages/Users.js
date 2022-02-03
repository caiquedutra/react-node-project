import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {

    const USERS =
        [{
            id: 1,
            name: 'Caique Dutra',
            image: 'https://github.com/caiquedutra.png',
            places: 3
        }]

    return <UsersList items={USERS} />
}

export default Users;