import React from 'react';
import UsersList from '../components/UsersList';

const User = () => {

    const users = [
        {
            id: 'u1',
            name: "john doe",
            image: "https://www.hyperigm.org/wp-content/uploads/2015/02/john_doe_testimonial.jpg",
            places: 3
        }
    ];
    return (
        <div>
            <UsersList items={users} />
        </div>
    );
}

export default User;
