import React, {useState, useEffect} from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {

    return (
        <div className="bg-neutral-800 md:w-full lg:w-9/12 ">
            <section className="yum flex text-neutral-600 texto2 font-extralight  ml-11 text-2xl">
                <span className="pt-2" to="/">Home</span>
                <span className="pt-11 pb-11" to="/About">About</span>
                <span className="pb-2" to="/Login">Login</span>
            </section>
            <section>
                <h1 className="text-white titulo3 text-7xl" to='/'>Change</h1>
                <p className="titulo2 font-extralight uppercase text-white mt-5 text-2xl">Be the Change! Build a bigger world.</p>
                <section className="text-white flex mb-5 mt-11 ">
                    <span className="text-4xl" href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook/>
                    </span>
                    <span className="mr-9 ml-9 text-4xl " href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                    </span>
                    <span className="text-4xl" href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </span>
                </section>
                <p className="titulo2 font-extralight uppercase text-white text-2xl mt-36">© {new Date().getFullYear()} All rights reserved.</p>
            </section>
        </div>
    )
}


export default Footer;