import React from "react";
import {useState} from "react";
import {storage, useAuth} from "../../../firebase-config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {BiBarChart, BiCurrentLocation, BiLocationPlus, BiMailSend} from "react-icons/bi";


const C1_A = (props) => {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(null)

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const currentUser = useAuth();
    const handleSubmit = () => {
        const imageRef = ref(storage, "image");
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setUrl(url);
            })
                .catch((error) => {
                    console.log(error.message, "error getting the image url");
                });
            setImage(null);
        })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <>
            <div> {currentUser ? (
                <div className="rounded shadow relative bg-white -mt-16 mb-8 h-96 pt-11">
                    <div className=" text-center items-center w-36 h-36 mx-auto">
                        <img src={url} className="border-2 shadow w-36 h-36 border-black rounded-full"/>
                        <div className="grid grid-cols-2 gap-1 pt-5">
                            <label className="rounded-full bg-black text-white text-center hover:shadow-lg p-2">
                                <input
                                    type="file" onChange={handleImageChange}/>Select
                            </label>
                            <button className="rounded-full bg-black text-white text-center hover:shadow-lg p-2"
                                    onClick={handleSubmit}>Submit
                            </button>
                        </div>
                    </div>

                    <div className=" bg-white pl-5 pt-24 pb-28 rounded-lg shadow">
                        <ul className="divide-y-2 divide-gray-100">
                            <li className="flex p-3 font-light text-md">
                                <h1 className="pr-2 text-2xl">
                                    <BiCurrentLocation/>
                                </h1>
                                <label className="pr-1" for="cidade">City:</label>
                                <input className="font-medium" type="text" id="cidade" name="cidade"/>
                            </li>
                            <li className="flex p-3 font-light text-md">
                                <h1 className="pr-2 text-2xl">
                                    <BiMailSend/>
                                </h1>
                                Email:
                                <span className="font-medium pl-1">{currentUser.email}</span>
                            </li>
                            <li className="flex p-3 font-light text-md">
                                <h1 className="pr-2 text-2xl">
                                    <BiBarChart/>
                                </h1>
                                Selected Gases:
                                <span className="font-medium pl-1">
                                {props.gases[0][0] ? ("CO ") : ("")}
                                {props.gases[1][0] ? (<span className="pr-1">CH<sub>4</sub></span>) : ("")}
                                {props.gases[2][0] ? (<span className="pr-1">O<sub>3</sub></span>) : ("")}
                                {props.gases[3][0] ? (<span className="pr-1">N<sub>2</sub></span>) : ("")}
                                </span>
                            </li>
                            <li className="flex p-3 font-light text-md">
                                <h1 className="pr-2 text-2xl">
                                    <BiLocationPlus/>
                                </h1>
                                Selected Cities:
                                <span className="font-medium pl-1">
                                    {props.cidade[0][0] ? ("BJ") : ("")}
                                    {props.cidade[1][0] ? (" BE") : ("")}
                                    {props.cidade[2][0] ? (" NY") : ("")}
                                    {props.cidade[3][0] ? (" TK") : ("")}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>) : (<>
                <h1 className='text-white text-center mt-20 titulo3 text-6xl'>Loading...</h1>
            </>)}
            </div>
        </>
    )
}

export default C1_A