import React from 'react'
import MethaneGraph from './Profile_Graphs/Methane/Methane_Graph'

const C2 = (props) => {
    return (
        <>
            {props.cities[0][0] && props.gas ? (<>
                    <div className='text-left ml-24 text-white mt-36'>
                        <h1 className='titulo1 text-6xl '>Methane</h1>
                    </div>
                    <div className="container mx-auto p-5 bg-neutral-900 w-3/4">
                            <MethaneGraph />
                    </div>
                    </>)
                : (<></>)}

        </>
    )
}
export default C2