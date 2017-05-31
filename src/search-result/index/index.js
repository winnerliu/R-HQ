import React from 'react';
import './index.less';
import {List} from "antd-mobile";
const Item = List;
const datas = {
    items: [
        {
            title: 'hello'
        },
        {
            title: 'hello'
        },
        {
            title: 'hello'
        },
        {
            title: 'hello'
        },
        {
            title: 'hello'
        },
        {
            title: 'hello'
        },
        {
            title: 'hello'
        },
        {
            title: 'hello'
        },
        {
            title: 'hello'
        }
    ]
}

export default class SearchResult extends React.Component {

    renderItem(items) {
        return items && items.map((item, index) => {
                return (
                    <Item key={index} >
                        <div className='item'>
                            {item.title}
                        </div>
                    </Item>
                )
            })
    }


    render() {
        return (
            <div>
                <List>
                    {datas.items && this.renderItem(datas.items)}
                </List>
            </div>
        );
    }
}