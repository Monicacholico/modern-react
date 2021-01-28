import React, {Component} from 'react';
import {choice} from './helpers';

import './Box.css';

class Box extends Component {
    state = {
        color: choice(this.props.colors)
    }
    pickColor = () => {
        let newColor;
        do{
            newColor = choice(this.props.colors);
            console.log(newColor)
        } while (newColor === this.state.color)

        this.setState({
            color: newColor
        })
    }
    handleClick = () => {
        this.pickColor();
    }
    render() {
        return (
            <div
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}
            className="Box">
            </div>
        )
    }
}

export default Box;