import React from "react";


export default class C4_A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value_year: 2022,

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
        if(this.verifyDate(event.target.value,this.state.value_month,this.state.value_days)){    
            this.setState({value_year: event.target.value});
            let index = this.searchArrayIndex(event.target.value,this.state.value_month,this.state.value_days);
            this.setState({content: (<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>Trend: {this.state.info4[index].trend}</p>
                </div>
                <div className="text-white titulo2 text-md pb-24">
                    <p>Cycle: {this.state.info4[index].cycle}</p>
                </div>
            </>) })
        }else{
            this.setState({content:(<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>INVALID DATE</p>
                </div>
            </>
            )})
            this.setState({value_year: event.target.value})
        }
    }
    handleChangeMonth(event){
        if(this.verifyDate(this.state.value_year,event.target.value,this.state.value_days)){
            this.setState({value_month: event.target.value});
            let index = this.searchArrayIndex(this.state.value_year,event.target.value,this.state.value_days);
            this.setState({content: (<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>Trend: {this.state.info4[index].trend}</p>
                </div>
                <div className="text-white titulo2 text-md pb-24">
                    <p>Cycle: {this.state.info4[index].cycle}</p>
                </div>
            </>) })
        }else{
            this.setState({content:(<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>INVALID DATE</p>
                </div>
            </>
            )})
            this.setState({value_month: event.target.value})
        }
    }
    handleChangeDay(event){
        if(this.verifyDate(this.state.value_year,this.state.value_month,event.target.value)){
            this.setState({value_days: event.target.value});
            let index = this.searchArrayIndex(this.state.value_year,this.state.value_month,event.target.value);
            this.setState({content: (<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>Trend: {this.state.info4[index].trend}</p>
                </div>
                <div className="text-white titulo2 text-md pb-24">
                    <p>Cycle: {this.state.info4[index].cycle}</p>
                </div>
            </>) })
        }else{
            this.setState({content:(<>
                <div className="text-white pt-4 titulo2 text-md">
                    <p>INVALID DATE</p>
                </div>
            </>
            )})
            this.setState({value_days: event.target.value})
        }
    }
    searchArrayIndex(year,month,day){
        for(let i = 0; i < this.state.info4.length; i++){
            if(this.state.info4[i].year === year){
                if(this.state.info4[i].month === month){
                    if(this.state.info4[i].day === day){
                        return i;
                    }
                }
            }
        }
    }
    verifyDate(year,month,day){
        if(year < this.state.info4[this.state.info4.length - 1].year){
            return true;
        }else{
            if(month < this.state.info4[this.state.info4.length - 1].month){
                return true;
            }else if( month === this.state.info4[this.state.info4.length - 1].month){
                if(day < this.state.info4[this.state.info4.length - 1].day){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
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