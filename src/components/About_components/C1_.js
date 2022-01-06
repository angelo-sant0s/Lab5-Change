import originalImage from '../../assets/imgs/img-original.jpg';
import modifiedImage from '../../assets/imgs/img-modified.jpg';

import Slider from './Slider';

const slider1 = {
    delay: 2000,
    original: {
        url: originalImage,
        title: 'Before'
    },
    modified: {
        url: modifiedImage,
        title: 'After'
    }
};

const C1_ = () => {

    return (
        <div>
            <Slider {...slider1}/>
            <h1 className='text-white absolute top-1/2 left-56 titulo1 md:text-5xl lg:text-7xl text-lg'>THE WORLD IS CHANGING</h1>
        </div>
    )
}

export default C1_;
