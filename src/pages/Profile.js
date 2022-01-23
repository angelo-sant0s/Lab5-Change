import React from 'react';
import { getAuth } from 'firebase/auth';
import C1 from '../components/Profile/C1'
import C2 from '../components/Profile/C2'
import C3 from '../components/Profile/C3'
import Footer from '../components/Footer/Footer'


const Profile = () => {

    const currentUser = getAuth();

    return (
        <>
        <div className='text-white'>
            {currentUser.currentUser.email}
        </div>
            <C1 />
            <C2 />
            <C3 />
            <Footer />
            </>
    )
}

export default Profile;
