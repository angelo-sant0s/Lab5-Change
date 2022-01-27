import React from 'react';
import './Form.css';
import "./FormBack/Streamgraph"

const FormSucess = () => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success font-extralight uppercase py-11'>You are logged in!</h1>
            <Example />
        </div>
    );
};

export default FormSucess;