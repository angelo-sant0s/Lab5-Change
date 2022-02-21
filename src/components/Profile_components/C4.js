import React from 'react';
import OzoneGraph from './Profile_Graphs/Ozone/Ozone_Graph';

const C4 = (props) => {
  return (
      <>
        {props.cities[0][0] && props.gas ? (<>
            <div className='text-left ml-24 text-white mt-36'>
                <h1 className='titulo1 text-6xl pb-5'>Ozone</h1>
            </div>
            <div className="container mx-auto p-5 bg-neutral-900 w-3/4">
                    <OzoneGraph />
            </div>
            </>)
        : (<></>)}
    </>
  )
}

export default C4;