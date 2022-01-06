import React, {useState} from 'react';
import useForm from "./useForm";
import validate from "./validateInfo";
import './Form.css';
import{signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './../../firebase-config';

const Login_Form = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

     /* Firebase Authentication */
    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, values.email,values.password)
            console.log(user);
        }catch(error){
            console.log(error.message);
        }
    }
    const logout = async () => {
        await signOut(auth);
    }


    return (
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Glad to have you back. Let the Change continue.
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange = {handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-input-btn btn titulo2 mt-5' type='submit' onClick={login}>
                    Login
                </button>
            </form>
    );
};

export default Login_Form;