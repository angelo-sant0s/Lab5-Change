import React, { useEffect,useState } from "react";
import db ,{upload, useAuth} from "../../../firebase-config";
import {BiBarChart, BiLocationPlus, BiMailSend} from "react-icons/bi";
import {doc, getDoc} from "firebase/firestore";


const C1_A = (props) => {

    const currentUser = useAuth();
    const[photoURL, setPhotoUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const[userinfo, setUserinfo] = useState([]);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0
    ]);
        }};

    const handleSubmit = () => {
        upload(image, currentUser,setLoading);
    };

    useEffect(() => {
        if(currentUser){
            if(currentUser?.photoURL){
                setPhotoUrl(currentUser.photoURL);
            }
            const docRef = doc(db, "users" , currentUser.uid)
            getDoc(docRef)
            .then((doc) => {
                setUserinfo(doc.data());
            })
        }
    }, [currentUser])

    return (
        <>
            <div> {currentUser ? (
                <div className="rounded shadow relative bg-white -mt-16 pt-11">
                    <div className=" text-center items-center w-36 h-42 mx-auto">
                        <div className="font-medium pb-3">
                            {userinfo.username}
                        </div>
                        <img src={photoURL} className="border-2 shadow w-36 h-36 border-black rounded-full" draggable={false} alt={photoURL}/>
                        <div className="grid grid-cols-2 gap-1 pt-5">
                            <label className="rounded-full bg-black text-white text-center hover:shadow-lg p-2">
                                <input
                                    type="file" onChange={handleImageChange}/>Select
                            </label>
                            <button className="rounded-full bg-black text-white text-center hover:shadow-lg p-2"
                                    onClick={handleSubmit}
                                    disabled={loading || !image}>Submit
                            </button>
                        </div>
                    </div>
                    <div className=" bg-white pl-5 pt-8 pb-20 rounded-lg shadow">
                        <ul className="divide-y-2 divide-gray-100">
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