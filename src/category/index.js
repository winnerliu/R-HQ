import React from 'react';
import {SearchBar, Toast} from 'antd-mobile';
import HSearchBar from "../common/components/HSearchBar/index";
import styles from "./index.less";

const letters = ['☆', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const brands = {
    datas: [
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
        {name: "hello", title: "abc"},
    ]
}

export default class Category extends React.Component {

    onLetterPress(index) {
        Toast.info(letters[index])
        console.log(letters[index])
    }

    onBrandPress(index) {
        console.log(index)
    }

    renderLetters(letters, onClick) {
        return (
            letters && letters.map((letter, index) => {
                return (
                    <div className="letterItem" key={index} onClick={() => {
                        onClick && onClick(index)
                    }}>
                        {letter}
                    </div>
                )
            })
        );
    }

    renderBrands(brands) {
        return (
            brands && brands.map((brand, index) => {
                return (
                    <div className="brandItem" key={index}>
                        <div className="brandTitle">{brand.title}</div>
                        <div className="brandContent">
                            <div className="brandLogoAndName">
                                <img className="brandLogo" src={require('./images/logo.png')}/>
                                <span className="brandName">{brand.name}</span>
                            </div>
                        </div>


                    </div>
                )
            })
        );
    }

    render() {
        return (
            <div>
                <div className="searchBar">
                    <HSearchBar className="categorySearchBar" disabled='false'/>
                </div>

                <div className="container">
                    <div className="leftContainer">
                        {brands.datas && this.renderBrands(brands.datas, this.onBrandPress())}
                    </div>
                    <div className="rightContainer">
                        {letters && this.renderLetters(letters, this.onLetterPress)}
                    </div>
                </div>
            </div>
        );
    }
}