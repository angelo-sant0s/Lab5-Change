import './style.css';


const Handle = ({
                    isDragStarted = false,
                    positionLeft,
                    onDragStop,
                    onDragStart,
                    elementRefference
                }) => (
    <span onMouseDown={onDragStart}
          style={{ left: positionLeft }}
          onMouseUp={onDragStop}
          ref={elementRefference}

          className={`cd-handle ${isDragStarted && 'draggable'}`}></span>
);
//<span className="w-6 text-gray-400 rotate-90 transform"  aria-label="ArrowsAltH"><FaArrowsAltH/>

export default Handle;