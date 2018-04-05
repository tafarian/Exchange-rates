// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import scss
import './../css/style.scss';

// import chart.js
import {Bar, Line, Pie} from 'react-chartjs-2';

// import components

class Header extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm col-md col-lg col-xl header">
                        <h1>Exchange-rates</h1>
                    </div>
                </div>
            </div>
        )
    }
}

class Menu extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 first-btn">
                        <h1>Test 1</h1>
                    </div>
                    <div className="col-sm-3 second-btn">
                        <h1>Test 2</h1>
                    </div>
                    <div className="col-sm-3 third-btn">
                        <h1>Test 3</h1>
                    </div>
                    <div className="col-sm-3 fourth-btn">
                        <h1>Test 4</h1>
                    </div>
                </div>
            </div>
        )
    }
}

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)'
                            ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="chart">  
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Largest cities in Massachusetts',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}/>
            </div>
        )
    }
}

class ExchangeRates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: null,
            url: "http://data.fixer.io/api/latest?access_key=5cb066088ea95d73e59b305735587d16"
        }
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    movie: resp,
                })
            });
    }

    render() {

        console.log(this.state.movie)
        return (
            <div>
                halo
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return(
            <div>
                <Header />
                <Menu />
                <Chart />
                <ExchangeRates/>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);