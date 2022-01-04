import React from 'react'
import { Link } from 'react-router-dom';
import Video from '../../assets/videos/video_1.mp4';

const C1 = () => {
    return (
        <div className=''>
            <video className='static' src={Video} autoPlay muted loop />
            <section className='absolute top-96 left-12 text-white'>
                <h1 className='titulo1'>Climate</h1>
                <h1 className='titulo1'>Change</h1>
                <p>Let's help bring Change to the planet.</p>
            </section>
            <section>
                <button>
                    <Link to="/About">Learn More</Link>
                </button>
            </section>
            
        </div>
    )
}

export default C1;
