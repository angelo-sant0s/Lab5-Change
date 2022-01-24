 import React from "react";
import {createPopper} from "@popperjs/core";

const Dropdown = ({color}) => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    let bgColor;
    color === "black"
        ? (bgColor = "bg-black")
        : (bgColor = "bg-" + color + "-500");
    return (
        <>
            <div className="flex flex-wrap pt-5">
                <div className="w-full px-4">
                    <div className="relative inline-flex  w-full">
                        <button
                            className={
                                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                                bgColor
                            }
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                        >
                            {color === "black" ? "Black Dropdown" : color + " Dropdown"}
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                (color === "white" ? "bg-white " : bgColor + " ") +
                                "text-base float-left py-2 list-none text-left rounded shadow-lg mt-1"
                            }
                            style={{minWidth: "12rem"}}
                        >
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-blueGray-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Action
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-blueGray-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Another action
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-blueGray-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Something else here
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function DropdownRender() {
    return (
        <>
            <Dropdown color="black"/>
        </>
    );
}