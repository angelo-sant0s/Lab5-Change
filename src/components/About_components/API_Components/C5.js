import React from "react";


export default class C5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select Year',

            loading5: true,

            info5: null,

            dates2: [],

            index5: 0,
        }

        /* Quinto Fetch|API */
        this.handleChange5 = this.handleChange5.bind(this);
    }


    /* Quinto Fetch|API */
    handleChange5(event) {
        this.setState({value: event.target.value});
        this.setState({
            index5: this.state.info5.map((e) => {
                return e.date
            }).indexOf(event.target.value)
        })
    }

    async componentDidMount() {

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

                <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                        onChange={this.handleChange5} value={this.state.value}>
                    {this.state.dates2.map((date2) =>
                        <option key={date2} value={date2}>{date2}</option>)}
                </select>
                {this.state.info5 ? (<>
                    <div className="text-white titulo2 text-md pt-4">
                        <p>Average: {this.state.info5[this.state.index5].average}</p>
                    </div>
                    <div className="text-white titulo2 text-md pb-24">
                        <p>Trend: {this.state.info5[this.state.index5].trend}</p>
                    </div>
                </>) : (<div className="text-white">loading...</div>)}


            </>
        )
    }
}