import React, { useState } from 'react';
import C1 from '../components/Profile_components/C1';
import C2 from '../components/Profile_components/C2';
import C3 from '../components/Profile_components/C3';
import Footer from '../components/Footer_components/Footer';

const Profile = () => {


    const[Beijing, setBeijing] = useState(false);
    const[Berlin, setBerlin] = useState(false);
    const[NewYork, setNewYork] = useState(false);
    const[Tokyo, setTokyo] = useState(false);
    const setarrays = [[Beijing, setBeijing],
    [Berlin, setBerlin],
    [NewYork, setNewYork],
    [Tokyo, setTokyo]];

    const[Carbon, setCarbon] = useState(false);
    const[Methane,setMethane] = useState(false);
    const[Ozone, setOzone] = useState(false);
    const[Nitrogen, setNitrogen] = useState(false);
    const setarrays2 = [[Carbon, setCarbon],
    [Methane,setMethane],
    [Ozone, setOzone],
    [Nitrogen, setNitrogen]];

    const handlecheck = (array) => {
        array[1](!array[0]);
    }

    return (
        <>
            <C1 handlecheck={handlecheck} methods={setarrays} methods2={setarrays2}/>
            {Beijing && Carbon ? (<><h1 className='text-white'>working</h1></>): (<><h1 className='text-white'>Not working</h1></>)}
            <C2 />
            <C3 />
            <Footer />
        </>
    )
}

export default Profile;
