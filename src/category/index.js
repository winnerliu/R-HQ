import React from 'react';
import {SearchBar, Toast} from 'antd-mobile';
import HSearchBar from "../common/components/HSearchBar/index";
import styles from "./index.less";
import NavBar from "./right-navbar/index";
import LetterPrompt from "./letter-prompt/index";

const letters = ['☆', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const brands = {
    datas: [
        {
            title: "#",
            list: [
                {name: '☆'},
                {name: '☆'},
                {name: '☆'}
            ]
        },
        {
            title: "aaa",
            list: [
                {name: 'aaa'},
                {name: 'aaa'},
                {name: 'aaa'}
            ]
        },
        {
            title: "bbb",
            list: [
                {name: 'bbb'},

            ]
        },
        {
            title: "c",
            list: [
                {name: 'c'},
                {name: 'c'},
                {name: 'c'},
                {name: 'c'},
                {name: 'c'},
                {name: 'c'}
            ]
        },
        {
            title: "d",
            list: [
                {name: 'd'}
            ]
        },
        {
            title: "e",
            list: [
                {name: 'e'},
                {name: 'e'}
            ]
        },
        {
            title: "f",
            list: [
                {name: 'f'},
                {name: 'f'}
            ]
        },
        {
            title: "g",
            list: [
                {name: 'g'},
                {name: 'g'}
            ]
        },
        {
            title: "h",
            list: [
                {name: 'h'},
                {name: 'h'}
            ]
        },
        {
            title: "i",
            list: [
                {name: 'i'},
                {name: 'i'}
            ]
        },
        {
            title: "j",
            list: [
                {name: 'j'},
                {name: 'j'}
            ]
        },
        {
            title: "k",
            list: [
                {name: 'k'},
                {name: 'k'}
            ]
        },
        {
            title: "l",
            list: [
                {name: 'l'},
                {name: 'l'}
            ]
        },
        {
            title: "m",
            list: [
                {name: 'm'},
                {name: 'm'}
            ]
        },
        {
            title: "n",
            list: [
                {name: 'n'},
                {name: 'n'}
            ]
        },
        {
            title: "o",
            list: [
                {name: 'o'},
                {name: 'o'}
            ]
        },
        {
            title: "p",
            list: [
                {name: 'p'},
                {name: 'p'}
            ]
        },
        {
            title: "q",
            list: [
                {name: 'q'},
                {name: 'q'}
            ]
        },
        {
            title: "r",
            list: [
                {name: 'r'},
                {name: 'r'}
            ]
        },
        {
            title: "s",
            list: [
                {name: 's'},
                {name: 's'}
            ]
        },
        {
            title: "t",
            list: [
                {name: 't'},
                {name: 't'}
            ]
        },
        {
            title: "u",
            list: [
                {name: 'u'},
                {name: 'u'}
            ]
        },
        {
            title: "v",
            list: [
                {name: 'v'},
                {name: 'v'}
            ]
        },
        {
            title: "w",
            list: [
                {name: 'w'},
                {name: 'w'}
            ]
        },
        {
            title: "x",
            list: [
                {name: 'x'},
                {name: 'x'}
            ]
        },
        {
            title: "y",
            list: [
                {name: 'y'},
                {name: 'y'}
            ]
        },
        {
            title: "z",
            list: [
                {name: 'z'},
                {name: 'z'},
                {name: 'z'},
                {name: 'z'},
            ]
        }
    ]
}

export default class Category extends React.Component {
    state = {}

    onLetterPress(index) {
        Toast.info(letters[index])
        console.log(letters[index])
    }

    onBrandPress(index) {
        console.log(index)
    }

    letterChange(letter) {
        this.setState({letter: letter});
        console.log('letterChange');
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

                        {brand.list && brand.list.map((item, i) => {
                            return (
                                <div className="brandContent"  key={i}>
                                    <div className="brandLogoAndName">
                                        <img className="brandLogo" src={require('./images/logo.png')}/>
                                        <span className="brandName">{item.name}</span>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                )
            })
        );
    }

    render() {
        let letterPrompt = null;
        let {letter} = this.state;
        if (letter) {
            letterPrompt = <LetterPrompt letter={letter}/>
        }
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
                        {/*{letters && this.renderLetters(letters, this.onLetterPress)}*/}
                        <NavBar
                            proShow={true}
                            letterChange={this.letterChange.bind(this)}/>
                    </div>
                    {letterPrompt}
                </div>
            </div>
        );
    }
}