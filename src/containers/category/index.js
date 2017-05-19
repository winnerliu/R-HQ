import React from 'react';
import styles from "./index.less";
import {Button, SearchBar, WhiteSpace, WingBlank} from "antd-mobile";
import HSearchBar from "../../../core/component/h-search-bar/index";


export default class Category extends React.Component{

    render(){
        return(
            <div>
               {/*<header>*/}

               {/*</header>*/}
                {/*<div>*/}
                    {/*<div>*/}

                    {/*</div>*/}
                    {/*<div>*/}

                    {/*</div>*/}
                {/*</div>*/}

                <SearchBarExample />
            </div>
        );
    }
}


class SearchBarExample extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: '美食',
            focused: false,
        };
    }

    // onChange=(value) => {
    //     // console.log(value, 'onChange');
    //     this.setState({ value });
    // };
    // clear = () => {
    //     this.setState({ value: '' });
    // };
    render() {
        return (<div>
            <WingBlank><div className={styles.subTitle}>普通普通普通普通普通普通普通普通普通普通普通普通普通普通普通普通普通普通普通</div></WingBlank>
            <SearchBar placeholder="搜索" />
            <WhiteSpace />
            <WingBlank><div className={styles.subTitle}>自动获取光标，支付宝客户端有效</div></WingBlank>
            <SearchBar placeholder="自动获取光标，支付宝客户端有效" autoFocus />
            <WhiteSpace />
            <WingBlank><div className={styles.subTitle}>手动获取获取光标</div></WingBlank>
            <SearchBar
                placeholder="手动获取获取光标"
                focused={this.state.focused}
                onFocus={() => {
                    this.setState({
                        focused: false,
                    });
                }}
            />
            <WhiteSpace />
            <WingBlank>
                <Button
                    onClick={() => {
                        this.setState({
                            focused: true,
                        });
                    }}
                    type="primary"
                >点击获取光标</Button>
            </WingBlank>
            <WhiteSpace />
            <WingBlank><div className={styles.subTitle}>显示取消按钮</div></WingBlank>
            <SearchBar
                value={this.state.value}
                placeholder="搜索"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
            />
        </div>);
    }
}

