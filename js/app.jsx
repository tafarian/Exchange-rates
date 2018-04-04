import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';

class App extends React.Component {

    render() {
        return(
            <div>hello</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);