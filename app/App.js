import React from 'react' ;
import ReactDOM from 'react-dom' ;
import Home from "./home/index";
import About from "./home/about";
import Demo from "./home/demo";
import {Route, Router} from "react-router";


ReactDOM.render(
    (
        <Router history={Router.hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/demo" component={Demo}/>
            <Route path="/about" component={About}/>
        </Router>
    ),
    document.getElementById('container')
);