import React from "react";
import { Link } from "react-router-dom";

export default class FetchData extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'select',
            loading: true,
            info: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({category: event.target.value});
    }

    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }



    async componentDidMount() {
        const url = "https://global-warming.org/api/arctic-api";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({info: data.result, loading: false});

        for(let i = 0 ; i < this.state.info.length; i++){
            console.log(this.state.info[i]);
        }
    }

    render() {


        return (
            <>
                <div className="container mx-auto px-20 mt-20">
                    <h1 className="text-6xl font-bold uppercase text-white titulo1 py-11">Data</h1>
                    <div className="flex mb-4 gap-2">
                        <div className="w-1/2 bg-neutral-900 h-72">
                            <div className="border-2 text-black m-4">
                                <div>
                                    {this.state.loading || !this.state.info ? (<div>loading...</div>) : (
                                        <div>
                                            <div>{this.state.info[this.state.info.length-1].year}</div>
                                            <div>{this.state.info[this.state.info.length-1].extent}</div>
                                            <div>{this.state.info[this.state.info.length-1].area}</div>
                                        </div>
                                    )}
                                </div>
                                <form onsubmit={this.handleSubmit}>
                                    <select id="lang" onChange={this.handleChange} value={this.state.value}>
                                        <option value="select">Select</option>
                                        <option value="Java">Java</option>
                                        <option value="C++">C++</option>
                                    </select>
                                    <p></p>
                                    <input type="submit" value="Submit" />
                                    <p>{this.state.value}</p>
                                </form>
                            </div>
                        </div>
                        <div className="w-1/2 bg-neutral-900 h-72">
                            <div className="border-2 pb-64 m-4"></div>
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
                   <Link className="titulo2 btn text-2xl" to="/Profile"> Descobre o teu </Link>
                </div>
            </>
        )
    }
}

