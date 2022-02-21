import React, {useRef, useState, useEffect} from 'react';
import './Form.css';
import db, { signup, useAuth } from '../../firebase-config';
import { doc, setDoc } from 'firebase/firestore';


const SignUpForm = () => {
    const[loading,setLoading] = useState();
    const usernameRef = useRef();
    const emailRef = useRef();
    const PasswordRef = useRef();
    const passwordConfirmRef = useRef();
    const currentUser = useAuth();

    const handleSubmit = async (event) => {
        setLoading(true);
        try{    
            await signup(emailRef.current.value,PasswordRef.current.value);           
            
        }catch(error){
            alert(error.message);
        }
        setLoading(false);
    }
    useEffect(() => {
        if(currentUser?.uid){
            const docRef = doc(db, "users",currentUser.uid);
            const payload = {username: usernameRef.current.value}
            setDoc(docRef, payload);
        }
    }, [currentUser])
    

    return (
            <form className='form' noValidate>
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
                        ref={usernameRef}
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        ref={emailRef}
                        required
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        ref={PasswordRef}
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        ref={passwordConfirmRef}
                    />
                </div>
                <button className='form-input-btn btn titulo2 mt-5' disabled={loading || currentUser } onClick={handleSubmit}>
                    Sign up
                </button>
            </form>
    );
};

export default SignUpForm;