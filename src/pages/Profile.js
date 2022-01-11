import React from 'react';
import { getAuth } from 'firebase/auth';

const Profile = () => {

    const currentUser = getAuth();

    return (
        <div className='text-white'>
            {currentUser.currentUser.email}
        </div>
    )
}

export default Profile;
