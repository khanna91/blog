import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <h1>Welcome To React</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
