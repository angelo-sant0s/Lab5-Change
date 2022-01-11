import React from "react";

export default class FetchData extends React.Component {

    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({info: data.results[0], loading: false});
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.info) {
            return <div>didn't get the data</div>;
        }

        return (
            <>
                <div className="container mx-auto px-20 mt-20">
                    <h1 className="text-6xl font-bold uppercase text-white titulo1 py-11">Data</h1>
                    <div className="flex mb-4 gap-2">
                        <div className="w-1/2 bg-neutral-900 h-72">
                            <div className="border-2 pb-64 m-4">
                                <div>
                                    <div>{this.state.info.name.title}</div>
                                    <div>{this.state.info.name.first}</div>
                                    <div>{this.state.info.name.last}</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-neutral-900 h-72">
                            <div className="border-2 pb-64 m-4"></div>
                        </div>
                    </div>
                    <div className="flex gap-2">
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
                    <button className="titulo2 btn text-2xl  mt-16 ">
                        Descobre o teu
                    </button>
                </div>
            </>
        )
    }
}

