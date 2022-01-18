import React from "react";


export default class C2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select Year',
            loading2: true,
            info2: null,
            times: [],
            index2: 0,

        }
        /* Segundo Fetch|API */
        this.handleChange2 = this.handleChange2.bind(this);
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

    async componentDidMount() {
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

    }

    render() {
        return (
            <>
                <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                        onChange={this.handleChange2} value={this.state.value}>
                    {this.state.times.map((time) =>
                        <option key={time} value={time}>{time}</option>)}
                </select>
                {this.state.info2 ? (<>
                    <div className="text-white titulo2 text-md pt-4">
                        <p>Station: {this.state.info2[this.state.index2].station}</p>
                    </div>
                    <div className="text-white titulo2 text-md pb-9">
                        <p>Land: {this.state.info2[this.state.index2].land}</p>
                    </div>
                </>) : (<div className="text-white">loading...</div>)}

            </>
        )
    }
}