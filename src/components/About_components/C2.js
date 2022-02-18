import React from 'react'

const C2 = () => {
    return (
        <>
            <div className="text-center text-white ml-80 mr-80 pt-32 pb-24">
                <h1 className="text-6xl font-medium ">Climate Change</h1>
                <p className="text-xl font-extralight text-justify mt-7">
                    Climate is the average weather in a place over many years. Climate change is a shift in those average conditions.
                    The rapid climate change we are now seeing is caused by humans using oil, gas and coal for their homes, factories and transport.
                    When these fossil fuels burn, they release greenhouse gases. These gases trap the Sun's heat and cause the planet's temperature to rise.
                    The world is now about 1.2C warmer than it was in the 19th Century - and the amount of CO2 in the atmosphere has risen by 50%.
                </p>
            </div>
            <div className="grid grid-cols-5 mb-32 mx-5  text-center">
                <section className="text-white titulo2 ">
                    <a className="font-medium  text-xl" href="#Melted Ice Caps">Melted Ice Caps</a>
                </section>
                <section className="text-white titulo2">
                    <a className="font-medium  text-xl" href="#Global Temperature Anomalies">Global Temperature Anomalies</a>
                </section>
                <section className="text-white titulo2">
                    <a className="font-medium  text-xl" href="#Methane">Methane</a>
                </section>
                <section className="text-white titulo2">
                    <a className="font-medium text-xl" href="#Carbon Dioxide">Carbon Dioxide</a>
                </section>
                <section className="text-white titulo2">
                    <a className="font-medium text-xl" href="#Nitrous Oxide">Nitrous Oxide</a>
                </section>
            </div>

        </>
    )
}

export default C2