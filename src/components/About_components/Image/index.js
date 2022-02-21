import { Fragment} from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Image = ({url, title = ''}) => (
    <Fragment>
        <img className="w-full h-full block max-w-full" draggable={false} src={url} alt={title} />
        {!!title && <span className="cd-image-label font-extralight p-5 opacity-0 text-white whitespace-nowrap absolute bottom-0 right-0" data-type="modified">{title}</span>}
    </Fragment>
);

Image.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string
}

Image.defaultProps = {
    title: ''
}

export default Image;