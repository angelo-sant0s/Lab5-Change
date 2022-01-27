import React from 'react'
import {Link} from "react-router-dom";
import Earth  from "../assets/imgs/earth.png";

const Error = () => {
    return (
        <div className="grid grid-cols-2  text-center pt-64">
            <div className="">
                <h1 className="text-9xl font-black titulo4 text-white ">404</h1>
                <h1 className="text-4xl text-white pt-5">PAGE NOT FOUND!</h1>
                <button className='titulo2 btn text-2xl  mt-16'>
                    <Link to="/">GO TO HOME</Link>
                </button>
            </div>
            <div className="">
                <img src={Earth} />
            </div>
        </div>
    )
}

export default Error;
