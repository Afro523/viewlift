import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/Login';
import Home from './components/Home';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Login} />
            <Route path="/home" component={Home} />
        </div>
    </Router>,
    document.getElementById('app')
);