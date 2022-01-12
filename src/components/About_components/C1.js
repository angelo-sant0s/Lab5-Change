import originalImage from '../../assets/imgs/img-original.jpg';
import modifiedImage from '../../assets/imgs/img-modified.jpg';

import Slider from './Slider';

const slider1 = {
    delay: 500,
    original: {
        url: originalImage,
        title: 'Before'
    },
    modified: {
        url: modifiedImage,
        title: 'After'
    }
};

const C1 = () => {

    return (
        <div>
            <Slider {...slider1}/>
            <h1 className='text-white absolute top-1/4 left-36 titulo1 md:text-5xl lg:text-7xl text-lg'>THE WORLD IS</h1>
            <h1 className='text-white absolute top-1/3 pt-11 left-36 titulo1 md:text-5xl lg:text-7xl text-lg'>CHANGING.</h1>
        </div>
    )
}

export default C1;
