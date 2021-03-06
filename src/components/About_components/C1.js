import originalImage from '../../assets/imgs/img-original.jpg';
import modifiedImage from '../../assets/imgs/img-modified.jpg';

import Slider from './Slider/Slider';

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
            <h1 className='text-white absolute top-1/4 left-36 titulo1 text-7xl'>THE WORLD IS</h1>
            <h1 className='text-white absolute top-1/3 pt-11 left-36 titulo1 text-7xl'>CHANGING.</h1>
        </div>
    )
}

export default C1;
