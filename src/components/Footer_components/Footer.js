import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="about5-bg pt-4">
        <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 mt-28 md:w-full lg:w-9/12 grid pt-6 pb-5 grid-cols-8 gap-3 ">
            <section className="yum text-center col-start-1 col-end-2 text-neutral-400 texto2 font-thin  text-3xl ">
                <Link  className="pt-2" to="/">Home</Link>
                <Link  className="pt-11 pb-11" to="/About">About</Link>
                <Link  className="pb-2" to="/Login">Login</Link>
            </section>
            <section className="col-end-7 col-span-3 s">
                <Link className="text-white titulo3 text-7xl" to='/'>Change</Link>
                <p className="titulo2 font-extralight uppercase text-white mt-5 text-2xl ">Be the Change.</p>
                <section className="text-white flex mb-5 mt-11 ">
                    <span className="text-4xl" href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook/>
                    </span>
                    <span className="mr-9 ml-9 text-4xl" href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                    </span>
                    <span className="text-4xl" href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </span>
                </section>
                <p className="titulo2 font-extralight uppercase text-white text-2xl  mt-36">© {new Date().getFullYear()} All rights reserved.</p>
            </section>
        </div>
        </div>
    )
}


export default Footer;