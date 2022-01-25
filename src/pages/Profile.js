import React, { useState } from 'react';
import C1 from '../components/Profile/C1'
import C2 from '../components/Profile/C2'
import C3 from '../components/Profile/C3'
import Footer from '../components/Footer/Footer'


const Profile = () => {

    const[CountryCheck,setCountryCheck] = useState(false);

    const handlecheck = () => {
        setCountryCheck(!CountryCheck);
        console.log(CountryCheck);
    }

    return (
        <>
            <C1 checked={CountryCheck} handlecheck={handlecheck} />
            <C2 />
            <C3 />
            <Footer />
        </>
    )
}

export default Profile;
