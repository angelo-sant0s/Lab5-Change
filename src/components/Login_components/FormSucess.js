import React from 'react';
import './Form.css';

const FormSucess = () => {
    return (
        <div className='form-content-right grid grid-cols-1'>
            <div>
                <h1 className='form-success titulo1 text-white text-4xl text-center pt-24'>You are logged in!</h1>
            </div>
            <div className=" flex justify-center pt-5">
                <img draggable={false}
                     src="https://new.globalphysicalactivityobservatory.com/wp-content/uploads/2020/02/globe.gif"/>
            </div>
        </div>
    )
        ;
};

export default FormSucess;