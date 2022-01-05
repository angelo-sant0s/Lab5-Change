import React from 'react'
import { Link } from 'react-router-dom';
import Video from '../../assets/videos/video_1.mp4';

const C1 = () => {
    return (
        <div className=''>
            <video className='static' src={Video} autoPlay muted loop />
            <section className='pl-16 absolute top-1/3'>
            <section className='grid sm:grid-cols-2 md:grid-cols-1 md:gap-3 text-white'>
                <h1 className='titulo1 md:text-8xl sm:text-2xl'>Climate</h1>
                <h1 className='titulo1 md:text-8xl sm:text-2xl'>Change</h1>
            </section>
                <p className='titulo2 md:text-3xl sm:text-lg mt-3 text-white'>Let`s help bring Change to the planet.</p>
            <section>
                <button className='titulo2 btn md:text-2xl sm:text-lg mt-16' >
                    <Link to="/About">Learn More</Link>
                </button>
            </section>
            </section>
        </div>
    )
}

export default C1;
