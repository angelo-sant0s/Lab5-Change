import React, {useState} from 'react'
import Login_Elements from '../components/Login_components/Login_Elements';
import FormSucess from '../components/Login_components/FormSucess';
import '../components/Login_components/Form.css'
import img from '../assets/imgs/clouds-earth-space.jpg'



const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
         <div style={{backgroundImage: url("https://via.placeholder.com/500")}}>
            <div className='form-container '>
                <div className='form-content-left '>
                    <h1 className="titulo3 text-8xl text-center  text-black mt-56" >Change</h1>
                    <p className='titulo2 text-lg text-center uppercase mt-2 text-black'>Let`s help bring Change to the planet.</p>
                </div>
                {!isSubmitted ? (<Login_Elements submitForm={submitForm} />) : (<FormSucess />)}
            </div>
        </div>
    );
};

export default Login;