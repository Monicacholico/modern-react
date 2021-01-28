import React, {Component} from 'react';
import Box from './Box';

import './Box.css';


class BoxesContainer extends Component {

    static defaultProps = {
        numBoxes: 18,
        allColors: ['lightpink', 'deeppink', 'lemonchiffon', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#ffd6a5']
    }
    state = {
        style : { backgroundColor: 'crimson'}
    }


    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(() =>
        <Box colors={this.props.allColors}/> )
        return (
            <div className="Box-Container">
               {boxes}
            </div>
        )
    }
}

export default BoxesContainer;