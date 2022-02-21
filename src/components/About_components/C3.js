import React from "react";
import Donut from "./Graphs/Donut";
import Carrosel from "./Carossel/Carrosel";
import {FaChartBar} from "react-icons/fa";

const C3 = () => {
    return (
        <>
            <div className="about2-bg">
                <a id="Melted Ice Caps"></a>
                <div className="grid grid-cols-3  text-white gap-11 py-16 ">
                    <h1 className="text-9xl font-bold titulo1 text-center big">01</h1>
                    <div className="col-start-2">
                        <div className="w-1/2 -mr-96 border-t-2"></div>
                        <h1 className="text-5xl font-bold titulo1 uppercase pt-5">Melted Polar Ice Caps</h1>
                        <p className="text-2xl titulo2 font-extralight text-justify pt-5"><b>Ice</b> acts like a protective cover
                            over the Earth. These bright white spots reflect excess heat
                            back into space and keep the planet cooler.</p>
                        <p className="text-2xl titulo2 font-extralight text-justify pt-5"><b>Rapid glacial melt </b>
                            in Antarctica also influences ocean currents, as massive
                            amounts of very cold glacial-melt water entering warmer ocean
                            waters is slowing ocean currents.
                            And as ice on land melts, sea levels will continue to rise.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3  gap-2  my-24 mx-8  text-center">
                <section className="text-white titulo2 pr-5">
                    <p className="font-medium tracking-tight text-3xl pb-2">Sea ice</p>
                    <p className="font-extralight text-justify text-2xl">Forms and melts strictly in the ocean whereas
                        glaciers are formed on land. </p>
                </section>
                <section className="text-white titulo2 px-5">
                    <p className="font-medium tracking-tight text-3xl pb-2">Icebergs</p>
                    <p className="font-extralight text-justify text-2xl">Are chunks of glacial ice
                        that break off glaciers and fall into the ocean.</p>
                </section>
                <section className="text-white titulo2 pl-5">
                    <p className="font-medium tracking-tight text-3xl pb-2">Glaciers </p>
                    <p className="font-extralight text-justify text-2xl">When they melt, the runoff
                       increases the amount of water, contributing to global sea level rise.</p>
                </section>
            </div>

            <div className="grid grid-cols-3  text-white gap-11 py-24 ">
                <a id="Global Temperature Anomalies"></a>
                <div className="col-start-2">
                    <div className="w-1/2 -mr-96 border-t-2"></div>
                    <h1 className="text-5xl font-bold titulo1 uppercase pt-5">Global Temperature Anomalies</h1>
                    <p className="text-2xl titulo2 font-extralight text-justify pt-5">One of the most obvious signals
                        of climate change is the rise in global average temperature.
                        Comparing the <b>average temperature</b> of land and ocean combined for any
                        month period to the average temperature for the same period over the
                        20th century shows that the conditions are warmer than the past.
                    </p>
                </div>
                <h1 className="text-9xl font-bold titulo1 text-center big">02</h1>
            </div>

           <Carrosel />

            <div className="grid grid-cols-2  text-white gap-11 pt-48 pb-11 ">
                <div className="pl-40">
                    <a id="Methane"></a>
                    <div className="w-1/2 -mr-96 border-t-2"></div>
                    <h1 className="text-5xl text-left font-bold titulo1 uppercase pt-5">Methane</h1>
                    <p className="text-2xl titulo2 font-extralight text-justify pt-5 pr-24">Methane is emitted
                        during the production and transport of coal, natural gas, and oil.
                        <b> Methane emissions</b> also result from livestock and other agricultural practices,
                        land use and by the decay of organic waste
                        in municipal solid waste landfills.
                    </p>
                </div>
                <h1 className="text-9xl pr-40 text-right font-bold titulo1 text-center big">03</h1>

            </div>
            <div className="about3-bg pt-2 px-40">
                <h1 className="font-medium text-white tracking-tight text-3xl py-11">Methane</h1>
                <div className="grid grid-cols-3 gap-24 text-justify">
                    <p className="text-2xl titulo2 text-white font-extralight">Methane – the main component of
                        natural gas – is far more effective at trapping
                        heat while it lasts.
                    </p>
                    <p className="text-2xl titulo2 text-white font-extralight pb-80"> Global emissions
                        of methane from human activities have barreled upward in recent decades.
                    </p>
                    <p className="text-2xl titulo2 text-white font-extralight">Fossil fuel sources and agriculture powering
                        the climb.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 text-white gap-11 pt-48 pb-11 ">
                <div className="pl-20">
                    <a id="Carbon Dioxide"></a>
                    <div className="w-1/2 -mr-96 border-t-2"></div>
                    <h1 className="text-5xl text-letf font-bold titulo1 uppercase pt-5">Carbon Dioxide</h1>
                    <p className="text-2xl titulo2 font-extralight text-justify pt-5 pr-24"> Carbon dioxide emissions
                        or <b> C02 emissions </b> are emissions stemming from the burning of fossil fuels and the manufacture of cement;
                        they include carbon dioxide produced during consumption of solid,
                        liquid, and gas fuels as well as gas flaring.
                    </p>
                </div>
                <h1 className="text-9xl pr-20 font-bold titulo1 text-right big">04</h1>
            </div>

            <div className="grid grid-cols-2 pt-24  pb-48">
                <div className="cols-span-2">
                    <img draggable={false} alt="img1"
                         src="https://i.imgur.com/mlkT4Hp.png"/>
                </div>
                <div className=" text-white px-28 pt-24">
                    <h1 className="text-5xl titulo1 text-white tracking-tight uppercase pb-11">C02</h1>
                    <p className="text-xl titulo2 font-extralight text-justify pt-5">Carbon dioxide emissions are the
                        primary driver of global climate change. It’s widely recognised that to avoid the worst impacts
                        of climate change, the world needs to urgently reduce emissions.
                    </p>
                    <p className="text-xl titulo2 font-extralight text-justify pt-5">Prior to the Industrial Revolution,
                        emissions were very low. Growth in emissions was still relatively
                        slow until the mid-20th century.
                        In 1950 the world emitted 6 billion tonnes of CO2.
                        By 1990 this had almost quadrupled, reaching more than 22 billion tonnes.
                        Emissions have continued to grow rapidly; we now emit over 34 billion tonnes each year
                    </p>
                    <div className="flex  pt-5">
                        <a className="text-xl pt-1 pr-4 opacity-20 hover:opacity-100" href="#Data"><FaChartBar/ ></a>
                        <p className="text-xl font-extralight text-justify">See data down below.</p>
                    </div>
                </div>
            </div>

            <div className="about6-bg">
                <a id="Nitrous Oxide"></a>
                <div className="grid grid-cols-3  text-white gap-11 py-24 ">
                    <h1 className="text-9xl font-bold titulo1 text-center big">05</h1>
                    <div className="col-start-2">
                        <div className="w-1/2 -mr-96 border-t-2"></div>
                        <h1 className="text-5xl font-bold titulo1 uppercase pt-5">Nitrous Oxide</h1>
                        <p className="text-2xl titulo2 font-extralight text-justify pt-5">Nitrous oxide is 300 times more potent than carbon dioxide,
                            and it also depletes the ozone layer. Since it also has a shorter life span, reducing it could have a faster, significant impact on global warming.
                            But the largest source of nitrous oxide is agriculture, particularly fertilized soil and animal waste, and that makes it harder to rein in.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 text-center  text-white  pt-48 pb-28 px-32 ">
                <div className="col-start-1 pr-8">
                    <p className="text-xl titulo2 font-extralight text-justify pt-5">The main driver of climate change is the greenhouse effect.
                        Some gases in the <b> Earth's atmosphere </b> act a bit like the glass in a greenhouse, trapping the sun's heat and stopping it
                        from leaking back into space and causing global warming.
                    </p>
                    <p className="text-xl titulo2 font-extralight text-justify pt-5">Many of these <b> Greenhouse gases </b> occur naturally,
                        but human activity is increasing the concentrations
                        of some of them in the atmosphere. This are the percentages:
                    </p>
                </div>
                <div className="col-start-2">
                    <Donut/>
                </div>
                <div className="col-start-3 pl-2">
                    <p className="text-xl titulo2 font-extralight text-justify pt-5"> Methane is a <b>more powerful </b> greenhouse gas than CO2,
                        but has a shorter atmospheric lifetime. Nitrous oxide, like CO2, is a long-lived greenhouse
                        gas that accumulates in the atmosphere <b> over decades to centuries</b>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default C3