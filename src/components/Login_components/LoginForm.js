import React, {useState, useRef} from 'react';
import './Form.css';
import { login , useAuth } from '../../firebase-config';

const LoginForm = () => {

    const[loading,setLoading] = useState();
    const emailRef = useRef();
    const PasswordRef = useRef();
    const currentUser = useAuth();
    const handleLogin = async (event) => {
        setLoading(true);
        try{    
            await login(emailRef.current.value,PasswordRef.current.value);

        }catch(error){
            alert(error.message);
        }
        setLoading(false);
    }

    return(
            <form className='form' noValidate>
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
                        ref={emailRef}
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
                <button className='form-input-btn btn titulo2 mt-5' disabled={loading || currentUser } onClick={handleLogin}>
                    Login
                </button>
            </form>
    );
};

export default LoginForm;