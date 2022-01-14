import React from "react";
import {Link} from "react-router-dom";

export default class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select Year',
            loading: true,
            info: null,
            info2: null,
            anos: [],
            index: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({
            index: this.state.info.map((e) => {
                return e.year
            }).indexOf(event.target.value)
        })
        console.log(this.state.index);
    }

    async componentDidMount() {
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
        fetch("https://global-warming.org/api/temperature-api")
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.setState({info2: data.result, loading: false});
            })
    }

    render() {


        return (
            <>
                <div className="container mx-auto px-20 mt-20">
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

                                    </>) : (<div>loading...</div>)}
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-neutral-900 h-72">
                            <div className="border-2 m-4">
                                <div className="titulo2 font-semibold text-white text-right tracking-tight pr-5 py-3 text-lg">02</div>
                                <div className="titulo1 text-white  pl-5  text-2xl">Global Temperature Anomalies</div>
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
                                            <p>Time: {this.state.info[this.state.index].time}</p>
                                        </div>
                                        <div className="text-white titulo2 text-md">
                                            <p>Station: {this.state.info[this.state.index].station}</p>
                                        </div>
                                        <div className="text-white titulo2 text-md pb-3">
                                            <p>Land: {this.state.info[this.state.index].land}</p>
                                        </div>
                                    </>) : (<div>loading...</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 pb-24">
                        <div className="w-1/5 bg-neutral-900 h-96">
                            <div className="border-2 pb-80 m-6"></div>
                        </div>
                        <div className="w-3/5 bg-neutral-900 h-96">
                            <div className="border-2 pb-80 m-6"></div>
                        </div>
                        <div className="w-1/5 bg-neutral-900 h-96">
                            <div className="border-2 pb-80 m-6"></div>
                        </div>
                    </div>
                    <Link className="titulo2 btn text-2xl" to="/Profile">Descobre o teu</Link>
                </div>
            </>
        )
    }
}

