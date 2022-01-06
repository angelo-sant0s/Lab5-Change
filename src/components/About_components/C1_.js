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
            <h2>Slider #1</h2>
            <Slider {...slider1}/>
        </div>
    )
}

export default C1_;