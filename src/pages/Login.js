import React, {useState} from 'react'
import Login_Elements from '../components/Login_components/Login_Elements';
import FormSucess from '../components/Login_components/FormSucess';
import '../components/Login_components/Form.css';
import Video from '../assets/videos/video_1.mp4';
import Login_Form from '../components/Login_components/LoginForm';



const Login = () => {

    const[SignIn, setSignIn] = useState(false);
    const[text,setText] = useState(false)

    const changeForm = () => {
        setSignIn(!SignIn);
        setText(!text);
    }

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
         <div>
            <video className='video-fundo' src={Video} autoPlay muted loop /> 
                <div className='form-container'>
                 <div className='form-content-left '>
                    <h1 className="titulo3 text-8xl text-center text-black mt-56" >Change</h1>
                    <p className='titulo2 text-lg text-center uppercase mt-2 text-black'>Let`s help bring Change to the planet.</p>
                    <button className="btn text-lg align-center uppercase bold" onClick={changeForm}>{!text ? "Login" : "Register"}</button>
                 </div>
                 <div className='form-content-right'>
                    {!SignIn ? (<Login_Elements submitForm={submitForm} />) : (<Login_Form submitForm={submitForm} />)}
                </div>
            </div>
        </div>
    );
};

export default Login;

/* {!isSubmitted && !SignIn ? (<Login_Elements submitForm={submitForm} />) : (<FormSucess />)} */