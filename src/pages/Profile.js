import React, { useState } from 'react';
import C1 from '../components/Profile_components/C1';
import C2 from '../components/Profile_components/C2';
import C3 from '../components/Profile_components/C3';
import C4 from '../components/Profile_components/C4';
import C5 from '../components/Profile_components/C5';

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
            <C2 cities={setarrays} gas={Methane}/>
            <C3 cities={setarrays} gas={Carbon}/>
            <C4 cities={setarrays} gas={Ozone}/>
            <C5 cities={setarrays} gas={Nitrogen}/>
        </>
    )
}

export default Profile;
