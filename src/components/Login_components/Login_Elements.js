import React, {useState} from 'react';
import useForm from "./useForm";
import validate from "./validateInfo";
import './Form.css';
import{createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './../../firebase-config';

const Login_Elements = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

     /* Firebase Authentication */
     const register = async () => {
         try{
         const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
         } catch (error){
             console.log(error.message);
         }
    }
    const login = async () => {

    }
    const logout = async () => {

    }

    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();
    const [registerUsername, setRegisterUsername] = useState();
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Get started with us today! Create your account by filling out the
                    information below.
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Username</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={(event) => {setRegisterUsername(event.target.value)}}
                        onChange = {handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={(event) => {setRegisterEmail(event.target.value)}}
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
                <div className='form-inputs'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={(event) => {setRegisterPassword(event.target.value)}}
                        onChange = {handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn btn titulo2 mt-5' type='submit' onClick={register}>
                    Sign up
                </button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>
    );
};

export default Login_Elements;