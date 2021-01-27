import React, {Component} from 'react';
import Box from './Box';

import './Box.css';


class BoxesContainer extends Component {
    render() {
        return (
            <div className="Box-Container">
                {/* <h2 style={{color: 'blue'}} className="Title-Container">I will hold a bunch of boxes here!</h2> */}
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        )
    }
}

export default BoxesContainer;