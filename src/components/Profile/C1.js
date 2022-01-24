import React from "react";
import {BiBarChart, BiLocationPlus, BiMailSend, BiCurrentLocation} from "react-icons/bi";
import Dropdown from "./Dropdown/Países";

const C1 = () => {


    return (
        <>
            <div className="bg-neutral-900 pb-10">
                <div className="about4-bg p-36 relative z-10">
                </div>
                <div className="grid grid-cols-3 gap-11">
                    <div className=" container px-6 mx-auto">
                        <div
                            className=" rounded shadow relative bg-white z-10 -mt-16 mb-8 h-96">
                            <div className="flex-col flex pt-5 ">
                                <div className="text-center items-center">
                                    <div className="w-36 h-36 mx-auto">
                                        <img className=" border-2 shadow w-36 h-36 border-black rounded-full"
                                             src=" https://cdn.tuk.dev/assets/webapp/master_layouts/boxed_layout/boxed_layout2.jpg"
                                             alt="logo"/>
                                    </div>
                                    <h5 className="font-medium tracking-tight titulo2 text-xl pt-5 mb-1">Andres
                                        Berlin
                                    </h5>
                                    <p className="font-extralight text-md">VP Operations</p>
                                </div>
                                <div className=" bg-white pl-5 pt-5 rounded-lg shadow">
                                    <ul className="divide-y-2 divide-gray-100">
                                        <li className="flex p-3 font-light text-md">
                                            <h1 className="pr-2 text-2xl">
                                                <BiCurrentLocation/>
                                            </h1>
                                            Cidade
                                        </li>
                                        <li className="flex p-3 font-light text-md">
                                            <h1 className="pr-2 text-2xl">
                                                <BiMailSend/>
                                            </h1>
                                            Email
                                        </li>
                                        <li className="flex p-3 font-light text-md">
                                            <h1 className="pr-2 text-2xl">
                                                <BiBarChart/>
                                            </h1>
                                            Opções Associadas
                                        </li>
                                        <li className="flex p-3 mb-28 font-light text-md">
                                            <h1 className="pr-2 text-2xl">
                                                <BiLocationPlus/>
                                            </h1>
                                            Países Associados
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 text-center text-white mt-16'>
                        <div>
                            <h1 className='titulo1 text-7xl '>Chose The Change</h1>
                            <p className='titulo2 text-3xl font-extralight tracking-tight mt-3'>Not only for the world,
                                but
                                for the future.
                            </p>
                        </div>
                        <div className="py-11 w-full">
                            <div className="flex items-center justify-center ">
                                <div className="w-4/12 mr-7 mb-7 bg-white p-6 shadow rounded">
                                    <div className="flex items-center border-b border-gray-200 pb-6">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="pl-3 text-left ">
                                                <p className="text-xl font-medium leading-5 text-gray-800">Escolhe o
                                                    país
                                                </p>
                                                <p className="text-sm leading-normal pt-2 text-gray-500">4 opções</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown/>
                                </div>
                                <div className="w-4/12 mr-7 mb-7 bg-white p-6 shadow rounded">
                                    <div className="flex items-center border-b border-gray-200 pb-6">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="pl-3 text-left ">
                                                <p className="text-xl font-medium leading-5 text-gray-800">Escolhe os
                                                    gases
                                                </p>
                                                <p className="text-sm leading-normal pt-2 text-gray-500">36 members</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-2">
                                        <p className="text-sm leading-5 py-4 text-gray-600">A group of people interested
                                            in dogecoin, the currency and a bit of side for the meme and dof that we all
                                            know and love. These cases are perfectly simple and easy to distinguish.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about4-bg p-48 ">
            </div>
        </>
    )
        ;

}
export default C1