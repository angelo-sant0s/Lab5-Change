import React from 'react'
import {Link} from "react-router-dom";
import Earth  from "../assets/imgs/earth.png";

const Error = () => {
    return (
        <div className="grid grid-cols-2 text-center pt-64">
            <div className="p-11">
                <div className="container text-9xl font-black titulo4 text-white tracking-wider">
                    <p className="glitch">
                        404
                    </p>
                </div>
                <h1 className="text-4xl text-white pt-5">PAGE NOT FOUND!</h1>
                <button className='titulo2 py-3 px-11  mx-auto bg-white rounded-full hover:shadow-md hover:shadow-gray-600  text-2xl  mt-16'>
                    <Link to="/">GO TO HOME</Link>
                </button>
            </div>
            <div className="flex justify-center ">
                <img src={Earth} />
            </div>
        </div>
    )
}

export default Error;
