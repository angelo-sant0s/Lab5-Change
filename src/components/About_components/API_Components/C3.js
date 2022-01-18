import React from "react";


export default class C3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select Year',
            loading3: true,
            info3: null,
            dates: [],
            index3: 0,

        }

        /* Terceiro Fetch|API */
        this.handleChange3 = this.handleChange3.bind(this);

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


    async componentDidMount() {
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
    }

    render() {
        return (
            <>
                <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                        onChange={this.handleChange3} value={this.state.value}>
                    {this.state.dates.map((date) =>
                        <option key={date} value={date}>{date}</option>)}
                </select>
                {this.state.info3 ? (<>
                    <div className="text-white titulo2 text-md pt-4">
                        <p>Average: {this.state.info3[this.state.index3].average}</p>
                    </div>
                    <div className="text-white titulo2 text-md pb-24">
                        <p>Trend: {this.state.info3[this.state.index3].trend}</p>
                    </div>
                </>) : (<div className="text-white">loading...</div>)}

            </>
        )
    }
}