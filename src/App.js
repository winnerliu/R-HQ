const React = require('react');
const ReactDOM = require('react-dom');
// 引入标准Fetch及IE兼容依赖
import "whatwg-fetch";
import "es6-promise/dist/es6-promise.min.js";
import "fetch-ie8/fetch.js";
// 引入React-Router模块
import {HashRouter, HashRouter as Router, Route} from "react-router-dom";
// bundle模型用来异步加载组件
// 引入单个页面（包括嵌套的子页面）
// 同步引入
import Home from "./home/index";
import Category from "./category/index/index";
import SearchInput from "./search-input/index";
import SearchResult from "./search-result/index/index";


class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log('will')
    }

    render() {
        return (
            <HashRouter>
                <Router basename="/">
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/category" component={Category}/>
                        <Route path="/search-input" component={SearchInput}/>
                        <Route path="/search-result" component={SearchResult}/>
                    </div>
                </Router>
            </HashRouter>
        )
    }

    componentDidMount() {
    }
}


// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render((
    <Init />
), document.querySelector('#init'))