import React, {useState, useRef} from 'react'
import {FaArrowsAltH} from "react-icons/fa";

const C1 = () => {

    const [imageRevealFraction, setimageRevealFraction] = useState(0.5);
    const imageContainer = useRef < HTMLDivElement > (undefined);

    const slide = (xPosition: number): void => {
        const containerBoundingReact = imageContainer.current.getBoundingClientRect();
        setimageRevealFraction(() => {
            if (xPosition < containerBoundingReact.left) {
                return 0
            } else if (xPosition > containerBoundingReact.right) {
                return 1
            } else {
                return ((xPosition - containerBoundingReact.left) / containerBoundingReact.width)
            }
        })
    }


    const handleMouseDown = (): void => {
        window.onmousemove = handleMouseMove;
        window.onmouseup = handleMouseUp;
    }

    const handleMouseMove = (event: MouseEvent): void => {
        slide(event.clientX);
    }

    const handleMouseUp = (event: MouseEvent): void => {
        window.onmousemove = undefined;
        window.onmouseup = undefined;
    }


    return (
        <div className="px-4">
            <div
                ref={imageContainer}
                className="max-w-lg w-full mx-auto mt-32 relative select-none group">
                <img
                    src="https://cbsnews3.cbsistatic.com/hub/i/r/2021/10/14/ca1ad3a4-1746-4ddd-9739-6eebcbe57ba0/thumbnail/620x414/b1cb2c0e89900bf07b9c81cba599d95c/gettyimages-1235852036.jpg"
                    alt=""
                    className="pointer-events-none"
                />
                <img
                    style={{
                        clipPath: `polygon(0 0,${imageRevealFraction * 100}% 0, ${imageRevealFraction * 100}% 100%, 0 100%)`,
                    }}
                    src="https://cbsnews3.cbsistatic.com/hub/i/r/2021/10/14/ca1ad3a4-1746-4ddd-9739-6eebcbe57ba0/thumbnail/620x414/b1cb2c0e89900bf07b9c81cba599d95c/gettyimages-1235852036.jpg"
                    alt=""
                    className="absolute inset-0 pointer-events-none"
                />
                <div
                    style={{left: `${imageRevealFraction * 100}%`}}
                    className="absolute inset-y-0 group-hover:opacity-100 sm:opacity-0">
                    <div className="relative h-full opacity-50 hover:opacity-100">
                        <div className="absolute inset-y-0 bg-white w-0.5 -ml-px opacity-50"></div>
                        <div onmousedown={handleMouseDown} ontouchmove={handleMouseMove} className="bg-white h-12 w-12 rounded-full -ml-6 absolute top-1/2 -mt-6 shadow-xl flex items-center justify-center cursor-pointer">
                            <span className="w-6 text-gray-400 rotate-90 transform"  aria-label="ArrowsAltH">
                                <FaArrowsAltH/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default C1