import React from 'react';
import { useAuth } from '../firebase-config';

const Profile = () => {

    const currentUser = useAuth();

    return (
        <div className='text-white'>
            
        </div>
    )
}

export default Profile;
