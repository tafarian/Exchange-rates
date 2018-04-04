// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import scss
import './../css/style.scss';

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
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 first-btn">
                        <h1>Test 1</h1>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 second-btn">
                        <h1>Test 2</h1>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 third-btn">
                        <h1>Test 3</h1>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 fourth-btn">
                        <h1>Test 4</h1>
                    </div>
                </div>
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
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);