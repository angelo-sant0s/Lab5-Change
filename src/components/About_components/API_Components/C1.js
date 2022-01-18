import React from "react";

export default class C1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select Year',
            loading: true,
            info: null,
            anos: [],
            index: 0
        }
        /* Primeiro Fetch|API */
        this.handleChange = this.handleChange.bind(this);

    }

    /* Primeiro Fetch|API */
    handleChange(event){
        this.setState({value: event.target.value});
        this.setState({
            index: this.state.info.map((e) => {
                return e.year
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
    }

    render() {
        return (
            <div>
                <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                        onChange={this.handleChange} value={this.state.value}>
                    {this.state.anos.map((ano) =>
                        <option key={ano} value={ano}>{ano}</option>)}
                </select>
                {this.state.info ? (<>
                    <div className="text-white pt-4 titulo2 text-md">
                        <p>Extent: {this.state.info[this.state.index].extent}</p>
                    </div>
                    <div className="text-white titulo2 text-md pb-9">
                        <p>Area: {this.state.info[this.state.index].area}</p>
                    </div>
                </>) : (<div className="text-white">loading...</div>)}

            </div>
        )
    }
}

