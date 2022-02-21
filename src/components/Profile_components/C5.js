import React from 'react';
import NitrogenGraph from './Profile_Graphs/Nitrogen/Nitrogen_Graph';

const C5 = (props) => {
  return (
    <>
        {props.cities[0][0] && props.gas ? (<>
            <div className='text-left ml-24 text-white mt-36'>
                <h1 className='titulo1 text-6xl pb-5'>Nitrogen</h1>
            </div>
            <div className="container mx-auto p-5 bg-neutral-900 w-3/4">
                    <NitrogenGraph />
            </div>
            </>)
        : (<></>)}
    </>
  )
}

export default C5;