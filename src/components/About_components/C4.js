import React from "react";
import {Link} from "react-router-dom";

export default class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select Year',
            loading: true,
            loading2: true,
            loading3: true,
            loading4: true,
            loading5: true,
            info: null,
            info2: null,
            info3: null,
            info4: null,
            info5: null,
            anos: [],
            times: [],
            dates: [],
            anos2: [],
            dates2: [],
            index: 0,
            index2: 0,
            index3: 0,
            index4: 0,
            index5: 0,
        }
        /* Primeiro Fetch|API */
        this.handleChange = this.handleChange.bind(this);
        /* Segundo Fetch|API */
        this.handleChange2 = this.handleChange2.bind(this);
        /* Terceiro Fetch|API */
        this.handleChange3 = this.handleChange3.bind(this);
        /* Quarto Fetch|API */
        this.handleChange4 = this.handleChange4.bind(this);
        /* Quinto Fetch|API */
        this.handleChange5 = this.handleChange5.bind(this);
    }

    /* Primeiro Fetch|API */
    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({
            index: this.state.info.map((e) => {
                return e.year
            }).indexOf(event.target.value)
        })
    }

    /* Segundo Fetch|API */
    handleChange2(event) {
        this.setState({value: event.target.value});
        this.setState({
            index2: this.state.info2.map((e) => {
                return e.time
            }).indexOf(event.target.value)
        })
    }

    /* Terceiro Fetch|API */
    handleChange3(event) {
        this.setState({value: event.target.value});
        this.setState({
            index3: this.state.info3.map((e) => {
                return e.date
            }).indexOf(event.target.value)
        })
    }

    /* Quarto Fetch|API */
    handleChange4(event) {
        this.setState({value: event.target.value});
        this.setState({
            index4: this.state.info4.map((e) => {
                return e.year
            }).indexOf(event.target.value)
        })
    }

    /* Quarto Fetch|API */
    handleChange5(event) {
        this.setState({value: event.target.value});
        this.setState({
            index5: this.state.info5.map((e) => {
                return e.date
            }).indexOf(event.target.value)
        })
    }

    async componentDidMount() {
        /* Primeiro Fetch|API */
        fetch("https://global-warming.org/api/arctic-api")
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.setState({info: data.result, loading: false});

                for (let i = 0; i < this.state.info.length; i++) {
                    this.state.anos.push(this.state.info[i].year);
                }
                this.setState({value: this.state.info[this.state.info.length - 1].year})
                this.setState({
                    index: this.state.info.map((e) => {
                        return e.year
                    }).indexOf(this.state.value)
                });
            });

        /* Segundo Fetch|API */
        fetch("https://global-warming.org/api/temperature-api")
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.setState({info2: data.result, loading2: false});
                for (let i = 0; i < this.state.info2.length; i++) {
                    this.state.times.push(this.state.info2[i].time);
                }
                this.setState({value: this.state.info2[this.state.info2.length - 1].time})
                this.setState({
                    index2: this.state.info2.map((e) => {
                        return e.time
                    }).indexOf(this.state.value)
                });
            })
        /* Terceiro Fetch|API */
        fetch("https://global-warming.org/api/methane-api")
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.setState({info3: data.methane, loading3: false});
                for (let i = 0; i < this.state.info3.length; i++) {
                    this.state.dates.push(this.state.info3[i].date);
                }
                this.setState({value: this.state.info3[this.state.info3.length - 1].date})
                this.setState({
                    index3: this.state.info3.map((e) => {
                        return e.date
                    }).indexOf(this.state.value)
                });
            })


        /* Quarto Fetch|API */
        fetch("https://global-warming.org/api/co2-api")
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.setState({info4: data.co2, loading4: false});
                for (let i = 0; i < this.state.info4.length; i++) {
                    this.state.anos2.push(this.state.info4[i].year);
                }
                this.setState({value: this.state.info4[this.state.info4.length - 1].year})
                this.setState({
                    index4: this.state.info4.map((e) => {
                        return e.year
                    }).indexOf(this.state.value)
                });
            });
        /* Quinto Fetch|API */
        fetch("https://global-warming.org/api/nitrous-oxide-api")
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.setState({info5: data.nitrous, loading4: false});
                for (let i = 0; i < this.state.info5.length; i++) {
                    this.state.dates2.push(this.state.info5[i].date);
                }
                this.setState({value: this.state.info5[this.state.info5.length - 1].date})
                this.setState({
                    index5: this.state.info5.map((e) => {
                        return e.date
                    }).indexOf(this.state.value)
                });
            });

    }

    render() {
        return (
            <>
                <div className="container mx-auto px-20 pt-3">
                    <h1 className="text-6xl font-bold uppercase text-white titulo1 py-11">Data</h1>
                    <div className="flex mb-4 gap-2">
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
                                    <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                                            onChange={this.handleChange} value={this.state.value}>
                                        {this.state.anos.map((ano) =>
                                            <option key={ano} value={ano}>{ano}</option>)}
                                    </select>
                                    {this.state.info && this.state.index ? (<>
                                        <div className="text-white pt-4 titulo2 text-md">
                                            <p>Extent: {this.state.info[this.state.index].extent}</p>
                                        </div>
                                        <div className="text-white titulo2 text-md pb-9">
                                            <p>Area: {this.state.info[this.state.index].area}</p>
                                        </div>
                                    </>) : (<div className="text-white">loading...</div>)}
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
                                    <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                                            onChange={this.handleChange2} value={this.state.value}>
                                        {this.state.times.map((time) =>
                                            <option key={time} value={time}>{time}</option>)}
                                    </select>
                                    {this.state.info2 && this.state.index2 ? (<>
                                        <div className="text-white titulo2 text-md pt-4">
                                            <p>Station: {this.state.info2[this.state.index2].station}</p>
                                        </div>
                                        <div className="text-white titulo2 text-md pb-9">
                                            <p>Land: {this.state.info2[this.state.index2].land}</p>
                                        </div>
                                    </>) : (<div className="text-white">loading...</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 pb-24">
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
                                    <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                                            onChange={this.handleChange3} value={this.state.value}>
                                        {this.state.dates.map((date) =>
                                            <option key={date} value={date}>{date}</option>)}
                                    </select>
                                    {this.state.info3 && this.state.index3 ? (<>
                                        <div className="text-white titulo2 text-md pt-4">
                                            <p>Average: {this.state.info3[this.state.index3].average}</p>
                                        </div>
                                        <div className="text-white titulo2 text-md pb-24">
                                            <p>Trend: {this.state.info3[this.state.index3].trend}</p>
                                        </div>
                                    </>) : (<div className="text-white">loading...</div>)}
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
                                    <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                                            onChange={this.handleChange4} value={this.state.value}>
                                        {this.state.anos2.map((ano2) =>
                                            <option  value={ano2}>{ano2}</option>)}
                                    </select>
                                    {this.state.info4 && this.state.index4 ? (<>
                                        <div className="text-white pt-4 titulo2 text-md">
                                            <p>Month: {this.state.info4[this.state.index4].month}</p>
                                        </div>
                                        <div className="text-white titulo2 text-md pb-24">
                                            <p>Cycle: {this.state.info4[this.state.index4].cycle}</p>
                                        </div>
                                    </>) : (<div className="text-white">loading...</div>)}
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
                                    <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                                            onChange={this.handleChange5} value={this.state.value}>
                                        {this.state.dates2.map((date2) =>
                                            <option key={date2} value={date2}>{date2}</option>)}
                                    </select>
                                    {this.state.info5 && this.state.index5 ? (<>
                                        <div className="text-white titulo2 text-md pt-4">
                                            <p>Average: {this.state.info5[this.state.index5].average}</p>
                                        </div>
                                        <div className="text-white titulo2 text-md pb-24">
                                            <p>Trend: {this.state.info5[this.state.index5].trend}</p>
                                        </div>
                                    </>) : (<div className="text-white">loading...</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="btn px-8 pt-3 titulo2 text-2xl" to="/Profile">Find Yours</Link>
                </div>
            </>
        )
    }
}

