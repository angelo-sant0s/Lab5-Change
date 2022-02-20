import React from "react";
import {useState} from "react";
import {storage, useAuth} from "../../../firebase-config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {BiBarChart, BiCurrentLocation, BiLocationPlus, BiMailSend} from "react-icons/bi";


const C1_A = () => {
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
                <div>
                    <div className="">
                        <img src={url} className="border-2 shadow w-36 h-36 border-black rounded-full"/>
                        <div className="grid grid-cols-2 gap-1 pt-5">
                            <label className="rounded-full bg-black text-white text-center hover:shadow-lg p-2"><input
                                type="file" onChange={handleImageChange}/>Select
                            </label>
                            <button className="rounded-full bg-black text-white text-center hover:shadow-lg p-2"
                                    onClick={handleSubmit}>Submit
                            </button>
                        </div>
                        <h5 className="font-medium tracking-tight titulo2 text-xl pt-2 mb-1">{currentUser.email}
                        </h5>
                        <p className="font-extralight text-md"></p>
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
                                Email:
                            </li>
                            <li className="flex p-3 font-light text-md">
                                <h1 className="pr-2 text-2xl">
                                    <BiBarChart/>
                                </h1>
                                Opções Associadas
                            </li>
                            <li className="flex p-3 mb-36 font-light text-md">
                                <h1 className="pr-2 text-2xl">
                                    <BiLocationPlus/>
                                </h1>
                                Países Associados
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