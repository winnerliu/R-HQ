import React from 'react' ;
import ReactDOM from 'react-dom' ;
import Home from "./containers/home/index";
import About from "./containers/about/index";
import Category from "./containers/category/index";
import SearchResult from "./containers/search-result/index";
import ProductDetail from "./containers/product-detail/index";
import SearchInput from "./containers/search-input/index";
import paths from './constants/path/paths';
import {Route, BrowserRouter as Router} from "react-router-dom";



ReactDOM.render(
    (
        <Router>
            <div>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/category"} component={Category}/>
                <Route path={"/search-input"} component={SearchInput}/>
                <Route path={"/search-result"} component={SearchResult}/>
                <Route path={"/product-detail"} component={ProductDetail}/>

            </div>
        </Router>
    ),
    document.getElementById('container')
);