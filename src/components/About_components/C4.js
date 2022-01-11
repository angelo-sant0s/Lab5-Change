import {Link} from "react-router-dom";

const C4 = () => {
    return (
        <>

            <div className="container mx-auto px-20 mt-20">
                <h1 className="text-6xl font-bold uppercase text-white titulo1 py-11">Data</h1>
                <div className="flex mb-4 gap-2">
                    <div className="w-1/2 bg-neutral-900 h-72">
                        <div className="border-2 pb-52 m-10"></div>
                    </div>
                    <div className="w-1/2 bg-neutral-900 h-72">
                        <div className="border-2 pb-52 m-10"></div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="w-1/5 bg-neutral-900 h-96">
                        <div className="border-2 pb-72 m-10"></div>
                    </div>
                    <div className="w-3/5 bg-neutral-900 h-96">
                        <div className="border-2 pb-72 m-10"></div>
                    </div>
                    <div className="w-1/5 bg-neutral-900 h-96">
                        <div className="border-2 pb-72 m-10"></div>
                    </div>
                </div>
                <button className="titulo2 btn text-2xl  mt-16 ">
                  Descobre o teu
                </button>
            </div>
        </>
    )
}

export default C4;