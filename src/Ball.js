import React, {Component} from 'react';

import './App.css';
import './Ball.css';


// let arrNumbers4 = Array.from({length: 4}, () => Math.floor(Math.random() * 400));
// let arrNumbers6 = Array.from({length: 6}, () => Math.floor(Math.random() * 400));
class Ball extends Component {
    // static defaulProps = {
    //     numbers : [
    //         arrNumbers4,
    //         arrNumbers6 
    //     ] 
    // }
    render() {
        // console.log(this.props)
        let arrNumbers4 = Array.from({length: 4}, () => Math.floor(Math.random() * 400));
        let arrNumbers6 = Array.from({length: 6}, () => Math.floor(Math.random() * 400));
        let fourBalls = arrNumbers4.map(arrNumber => <h1 className="Ball">{arrNumber}</h1>)
        let sixBalls = arrNumbers6.map(arrNumber => <h1 className="Ball">{arrNumber}</h1>)
        return (
            <div className="Ball-wrapper">
                {fourBalls}
                {/* {sixBalls} */}
            </div>
        )
    }
}

export default Ball;