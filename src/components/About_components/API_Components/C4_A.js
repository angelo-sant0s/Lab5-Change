import React from "react";


export default class C4_A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select Year',

            loading4: true,

            info4: null,

            anos2: [],

            index4: 0,

        }

        /* Quarto Fetch|API */
        this.handleChange4 = this.handleChange4.bind(this);

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


    async componentDidMount() {


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


    }

    render() {
        return (
            <>

                <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                        onChange={this.handleChange4} value={this.state.value}>
                    {this.state.anos2.map((ano2) =>
                        <option value={ano2}>{ano2}</option>)}
                </select>
                {this.state.info4 ? (<>
                    <div className="text-white pt-4 titulo2 text-md">
                        <p>Month: {this.state.info4[this.state.index4].month}</p>
                    </div>
                    <div className="text-white titulo2 text-md pb-24">
                        <p>Cycle: {this.state.info4[this.state.index4].cycle}</p>
                    </div>
                </>) : (<div className="text-white">loading...</div>)}

            </>
        )
    }
}