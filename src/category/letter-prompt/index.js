
import React from "react";
import "./index.less";

class LetterPrompt extends React.Component {
    render () {
        return (
            <div className="prompt">
                {this.props.letter}
            </div>
        )
    }
}

export default LetterPrompt;