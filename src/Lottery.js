import React, {Component} from 'react';
import Ball from './Ball';

class Lottery extends Component {
    render() {
        return (
            <div className="App-wrapper">
                <div className="App-ball">
                <h1>I am a ball</h1>
                <Ball/>
                </div>
            </div>
        )
    }
}

export default Lottery;