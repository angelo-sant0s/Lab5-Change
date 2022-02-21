import {Link} from "react-router-dom";
import C1 from "./API_Components/C1";
import C2 from "./API_Components/C2";
import C3 from "./API_Components/C3";
import C4_A from "./API_Components/C4_A";
import C5 from "./API_Components/C5";
import {useAuth} from "../../firebase-config";


const C4 = () => {
    const currentUser = useAuth();

    return (
        <a id="Data">
            <div className="container mx-auto px-20 pt-3">
                <h1 className="text-6xl font-bold uppercase text-white titulo1 py-11">Data</h1>
                <div className="flex mb-4 gap-3">
                    <div className="w-1/2 bg-neutral-900 h-72">
                        <div className="border-2 text-black m-4">
                            <div
                                className="titulo2 font-semibold text-white text-right tracking-tight pr-5 py-3 text-lg">
                                01
                            </div>
                            <div className="titulo1 text-white  pl-5  text-2xl">Melted Polar Ice Caps</div>
                            <div className="pl-5">
                                <h1 className="titulo2 uppercase text-white tracking-tight text-md pb-5">See the
                                    year see the change!
                                </h1>
                                <div>
                                    <C1 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 bg-neutral-900 h-72">
                        <div className="border-2 m-4">
                            <div
                                className="titulo2 font-semibold text-white text-right tracking-tight pr-5 py-3 text-lg">
                                02
                            </div>
                            <div className="titulo1 text-white  pl-5  text-2xl">Global Temperature Anomalies</div>
                            <div className="pl-5">
                                <h1 className="titulo2 uppercase text-white tracking-tight text-md pb-5">See the
                                    time see the change!
                                </h1>
                                <div>
                                    <C2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 pb-24">
                    <div className="w-1/5 bg-neutral-900 h-96">
                        <div className="border-2  m-6">
                            <div
                                className="titulo2 font-semibold text-white text-right tracking-tight pr-5 py-3 text-lg">
                                03
                            </div>
                            <div className="titulo1 text-white  pl-5 text-2xl">Methane</div>
                            <div className="pl-5">
                                <h1 className="titulo2 uppercase text-white tracking-tight text-md pb-5">See the
                                    date see the change!
                                </h1>
                                <div>
                                    <C3 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 bg-neutral-900 h-96">
                        <div className="border-2 m-6">
                            <div
                                className="titulo2 font-semibold text-white text-right tracking-tight pr-5 py-3 text-lg">
                                04
                            </div>
                            <div className="titulo1 text-white  pl-5  text-2xl">Carbon Dioxide</div>
                            <div className="pl-5">
                                <h1 className="titulo2 uppercase text-white tracking-tight text-md pb-11">See the
                                    year see the change!
                                </h1>
                                <div>
                                    <C4_A />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/5 bg-neutral-900 h-96">
                        <div className="border-2 m-6">
                            <div
                                className="titulo2 font-semibold text-white text-right tracking-tight pr-5 py-3 text-lg">
                                05
                            </div>
                            <div className="titulo1 text-white  pl-5  text-2xl">Nitrous Oxide</div>
                            <div className="pl-5">
                                <h1 className="titulo2 uppercase text-white tracking-tight text-md pb-5">See the
                                    date see the change!
                                </h1>
                                <div>
                                    <C5 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {currentUser ? (<Link className="btn px-8 pt-3 titulo2 text-2xl" to={`/Profile/${currentUser.uid}`}>Find Yours</Link>) : (<Link className="btn px-8 pt-3 titulo2 text-2xl" to="/Login">Find Yours</Link>) }
            </div>
        </a>
    )
}

export default C4;
