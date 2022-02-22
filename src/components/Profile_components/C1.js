import React, {useEffect, useState} from "react";
import {BiBarChart, BiLocationPlus, BiMailSend, BiCurrentLocation} from "react-icons/bi";
import C1_A from "./User_details/C1_A"
import db, {useAuth} from "../../firebase-config";
import {collection, onSnapshot} from "firebase/firestore";


const C1 = (props) => {

    const [cities, setCities] = useState([]);
    const gases = ["Carbon Monoxide", "Methane", "Ozone", "Nitrogen Dioxide"];
    const metodos = props.methods;
    const metodos_gas = props.methods2;

    useEffect(() => {
        onSnapshot(collection(db, "Cities"), (snapshot) => {
            setCities(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    const currentUser = useAuth();


    const changeCity = (event) => {
        switch (event.target.value) {
            case "Beijing":
                metodos[0][1](event.target.checked);
                break;
            case "Berlin":
                metodos[1][1](event.target.checked);
                break;
            case "New York":
                metodos[2][1](event.target.checked);
                break;
            case "Tokyo":
                metodos[3][1](event.target.checked);
                break;
        }
    };

    const changeGas = (event) => {
        switch (event.target.value) {
            case "Carbon Monoxide":
                metodos_gas[0][1](event.target.checked);
                break;
            case "Methane":
                metodos_gas[1][1](event.target.checked);
                break;
            case "Ozone":
                metodos_gas[2][1](event.target.checked);
                break;
            case "Nitrogen Dioxide":
                metodos_gas[3][1](event.target.checked);
                break;
        }
    }

    return (
        <>
            <div className="bg-neutral-900 pb-10">
                <div className="about4-bg p-36 relative">
                </div>
                <div className="grid grid-cols-3 gap-11">
                    <div className=" container px-6 mx-auto">
                        <div className="">
                            {currentUser ? (<div className="flex-col flex pt-5 ">
                                <C1_A gases={metodos_gas} cidade={metodos}/>
                            </div>) : (<>
                                <h1 className='text-white text-center mt-20 titulo3 text-6xl'>Loading...</h1>
                            </>)}
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
                                                <p className="font-medium tracking-tight titulo2 text-xl leading-5 text-gray-800">
                                                    Choose the Gases
                                                </p>
                                                <p className="font-extralight text-md pt-2 text-gray-500">{cities.length}
                                                    <span className="pl-1">Options</span>
                                                </p>
                                                <div className="text-left  pl-3">
                                                    <div className="text-left pt-5 pl-3">
                                                        {gases.map((gas) => (
                                                            <div className="text-left pt-5 pl-3" key={gas}>
                                                                <div
                                                                    className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                                                    <input type="checkbox" name="toggle"
                                                                           className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                                                           value={gas} onChange={changeGas}/>
                                                                    <label
                                                                        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                                                </div>
                                                                <label
                                                                    className="font-extralight text-md pt-2 tracking-tight text-gray-500">{gas}</label>
                                                            </div>))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="w-4/12 mr-7 mb-7 bg-white p-6 shadow rounded">
                                    <div className="flex items-center border-b border-gray-200 pb-6">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="pl-3 text-left ">
                                                <p className="font-medium tracking-tight titulo2 text-xl leading-5 text-gray-800">
                                                    Choose the city
                                                </p>
                                                <p className="font-extralight text-md pt-2 text-gray-500">{cities.length}
                                                    <span className="pl-1">Options</span>
                                                </p>
                                                <div className="text-left pt-5 pl-3">
                                                    {cities.map((city) => (
                                                        <div className="text-left pt-5 pl-3" key={city.name}>
                                                            <div
                                                                className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                                                <input type="checkbox" name="toggle"
                                                                       className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                                                       value={city.name} onChange={changeCity}/>
                                                                <label
                                                                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                                            </div>
                                                            <label
                                                                className="font-extralight text-md pt-2 tracking-tight text-gray-500">{city.name}</label>
                                                        </div>))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default C1;