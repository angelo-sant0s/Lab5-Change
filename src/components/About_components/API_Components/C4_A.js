import React from "react";


export default class C4_A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value_year: "2022",

            value_month: "1",

            value_days: "1",

            loading4: true,

            info4: null,

            anos2: [],

            meses: [1,2,3,4,5,6,7,8,9,10,11,12],

            dias: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],

            anos_set: new Set(),

            content: (<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>Trend: Choose a Date</p>
                </div>
                <div className="text-white titulo2 text-md pb-24">
                    <p>Cycle: Choose a Date</p>
                </div>
            </>)

        }

        /* Quarto Fetch|API */
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
    }


    /* Quarto Fetch|API */
    handleChangeYear(event){
        this.setState({value_year: event.target.value});
        let year = event.target.value;
        let month = this.state.value_month;
        let day = this.state.value_days;
        let found = false;
        console.log(year,month,day)
        for(let i=0; i < this.state.info4.length; i++){
            if(year === this.state.info4[i].year
                && month === this.state.info4[i].month
                 && day === this.state.info4[i].day){
                    this.setState({content: (<>
                        <div className="text-white pt-4 titulo2 text-md">
                            <p>Trend: {this.state.info4[i].trend}</p>
                        </div>
                        <div className="text-white titulo2 text-md pb-24">
                            <p>Cycle: {this.state.info4[i].cycle}</p>
                        </div>
                    </>) })
                    found = true;
                    break;
            }
        }
        if(!found){
            this.setState({content:(<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>INVALID DATE</p>
                </div>
            </>
            )})
        }
    }

    handleChangeMonth(event){
        this.setState({value_month: event.target.value});
        let year = this.state.value_year;
        let month = event.target.value;
        let day = this.state.value_days;
        let found = false;
        for(let i=0; i < this.state.info4.length; i++){
            if(year === this.state.info4[i].year
                && month === this.state.info4[i].month
                 && day === this.state.info4[i].day){
                    this.setState({content: (<>
                        <div className="text-white pt-4 titulo2 text-md">
                            <p>Trend: {this.state.info4[i].trend}</p>
                        </div>
                        <div className="text-white titulo2 text-md pb-24">
                            <p>Cycle: {this.state.info4[i].cycle}</p>
                        </div>
                    </>) })
                    found = true;
                    break;
            }
        }
        if(!found){
            this.setState({content:(<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>INVALID DATE</p>
                </div>
            </>
            )})
        }
    }

    handleChangeDay(event){
        this.setState({value_days: event.target.value});
        let year = this.state.value_year;
        let month = this.state.value_month;
        let day =  event.target.value;
        let found = false;
        for(let i=0; i < this.state.info4.length; i++){
            if(year === this.state.info4[i].year
                && month === this.state.info4[i].month
                 && day === this.state.info4[i].day){
                    this.setState({content: (<>
                        <div className="text-white pt-4 titulo2 text-md">
                            <p>Trend: {this.state.info4[i].trend}</p>
                        </div>
                        <div className="text-white titulo2 text-md pb-24">
                            <p>Cycle: {this.state.info4[i].cycle}</p>
                        </div>
                    </>) })
                    found = true;
                    break;
            }
        }
        if(!found){
            this.setState({content:(<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>INVALID DATE</p>
                </div>
            </>
            )})
        }
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
                    this.state.anos_set.add(this.state.info4[i].year);
                }
                this.setState({value: this.state.info4[this.state.info4.length - 1].year})
                this.setState({anos2: [...this.state.anos_set]})
            });


    }

    render() {
        return (
            <>

                <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                        onChange={this.handleChangeYear} value={this.state.value_year}>
                    {this.state.anos2.map((ano2) =>
                        <option key={ano2} value={ano2}>{ano2}</option>)}
                </select>
                <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                        onChange={this.handleChangeMonth} value={this.state.value_month}>
                    {this.state.meses.map((mes) =>
                        <option key={mes} value={mes}>{mes}</option>)}
                </select>
                <select className="rounded px-3 titulo2 hover:bg-black hover:text-white" id="lang"
                        onChange={this.handleChangeDay} value={this.state.value_days}>
                    {this.state.dias.map((dia) =>
                        <option key={dia} value={dia}>{dia}</option>)}
                </select>

                {this.state.content}

            </>
        )
    }
}