import React, {Component} from 'react';

import './Box.css';

class Box extends Component {
    static defaultProps = {
        color: {backgroundColor: 'hotpink'}
    }
    render() {
        console.log(this.props.color);
        return (
            <div style={this.props.color} className="Box">
                <h2>I am a box with a changing color!!!!</h2>
            </div>
        )
    }
}

export default Box;