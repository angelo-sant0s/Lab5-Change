import React, { useState, useEffect } from 'react';
import C0Graph from './Profile_Graphs/Carbon/C0_Graph';

const C3 = (props) => {
    return (
        <>
            
            
               {props.cities[0][0] && props.gas ? (<>
                    <div className='text-left ml-24 text-white mt-36'>
                        <h1 className='titulo1 text-6xl '>C0</h1>
                    </div>
                    <div className="container mt-16 mb-80 mx-auto bg-neutral-900 h-96 w-3/4">
                        <C0Graph />
                    </div>
                    </>)
                : (<></>)}
           

        </>
    )
}
export default C3;