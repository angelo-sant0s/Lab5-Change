import React, {useState} from 'react'
import SignUpForm from '../components/Login_components/SignUpForm';
import FormSucess from '../components/Login_components/FormSucess';
import '../components/Login_components/Form.css';
import Video from '../assets/videos/video_1.mp4';
import LoginForm from '../components/Login_components/LoginForm';
import { useAuth } from '../firebase-config';



const Login = () => {
    
    const currentUser = useAuth();
    const[SignIn, setSignIn] = useState(false);
    const[text,setText] = useState(false)

    const changeForm = () => {
        setSignIn(!SignIn);
        setText(!text);
    }

    

    return (
         <div>
            <video className='video-fundo' src={Video} autoPlay muted loop /> 
                <div className='form-container'>
                 <div className='form-content-left '>
                    <h1 className="titulo3 text-8xl text-center text-black mt-56" >Change</h1>
                    <p className='titulo2 text-lg text-center uppercase mt-2 text-black'>Let`s help bring Change to the planet.</p>
                    <div className='text-center'>
                        {currentUser ? <></> : <><p className='mt-11 uppercase texto1'>{!text ? "I want to login instead" : "I want to register instead"}</p>
                        <button className="btn2 text-lg  mt-5 bold" onClick={changeForm}>{!text ? "Login" : "Register"}</button></>}
                    </div>
                 </div>
                 <div className='form-content-right'>
                     {currentUser ? <FormSucess /> : <>{!SignIn ? (<SignUpForm />) : (<LoginForm />)}</> }
                </div>
            </div>
        </div>
    );
};

export default Login;
