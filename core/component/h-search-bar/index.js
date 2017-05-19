import React from 'react';
import styles from './index.less';
import {SearchBar} from "antd-mobile";
import classnames from "classnames";

export default class HSearchBar extends React.Component {

    // handleChange = (value) => {
    //     const {onChange} = this.props;
    //     onChange && onChange(value);
    // }
    //
    // handleCancel = () => {
    //     const {onSubmit, value} = this.props;
    //     value && onSubmit && onSubmit(value);
    // }

    render() {
        const {props} = this;
        const {cancelText, value, className, showCancelButton} = props;
        const classNames = classnames(styles.searchBar, className,
            {
                [styles.searchBarCancel]: !value,
                [styles.showCancelButton]: showCancelButton
            });
        const Text = value ? '搜索':cancelText || '取消';
        return (
            <SearchBar
                {...props}
                cancelText={Text}
                onChange={(value) => {
                    this.handleChange(value)
                }}
                onCancel={this.handleCancel}
                className={classNames}
            />
        );
    }
}