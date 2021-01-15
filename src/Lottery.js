import React, {Component} from 'react';
import Ball from './Ball';

import './Ball.css';

class Lottery extends Component {
    static defaulProps = {
        title: 'This is the Title',
        numOfBalls : 0,
        maxNum : 0
    }
    state = {
        nums : Array.from({length: 4}, () => Math.floor(Math.random() * 400))
    }
    render() {
        console.log(this.state);
        return (
            <div className="App-wrapper">
                <div className="App-ball">
                <h1>Lotto 4</h1>
                <div className="Ball-wrapper">
                <Ball className='Ball'
                num={23}
                />
                <Ball className="Ball"
                num={17}
                />
                </div>
                </div>
            </div>
        )
    }
}

export default Lottery;