import React from 'react'
import { Link } from 'react-router-dom';
import Video from '../../assets/videos/video_1.mp4';

const Home_details = () => {
    return (
        <div className=''>
            <video className='video-fundo' src={Video} autoPlay muted loop />
            <section className='pl-16 absolute top-1/3'>
            <section className='grid grid-cols-1 gap-3 text-white'>
                <h1 className='titulo1 text-8xl'>Climate</h1>
                <h1 className='titulo1 text-8xl'>Change</h1>
            </section>
                <p className='titulo2 text-3xl mt-3 text-white'>Let`s help bring Change to the planet.</p>
            <section>
                <button className='titulo2 btn text-2xl  mt-16' >
                    <Link to="/About">Learn More</Link>
                </button>
            </section>
            </section>
        </div>
    )
}

export default Home_details;
