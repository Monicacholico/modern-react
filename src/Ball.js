import React, {Component} from 'react';

import './Ball.css';

class Ball extends Component {
    render() {
        let arrNumbers = Array.from({length: 4}, () => Math.floor(Math.random() * 400));
        let ballNumbers = arrNumbers.join(' ');
        let eachBall = ballNumbers.map(ballNumber => <h1 className="Ball">{ballNumber}</h1>)
        let randNumber = Math.floor(Math.random * 40) + 1;
        console.log(randNumber);
        return (
            <h2>
                {/* {ballNumbers.map(ballNumber => <div className="Ball">{ballNumber}</div>)} */}
                {eachBall}
            </h2>
        )
    }
}

export default Ball;