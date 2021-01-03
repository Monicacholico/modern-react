import React, {Component} from 'react';
import './Clicker.css'

class Clicker extends Component {
    state = {
        displayButton: true,
        message: 'YOU WIN',
        randomNumber: 0
    }
    randNumber = () => {
        let arrofNums = [1,2,3,4,5,6,7,8,9,10];
        let rand = Math.floor(Math.random() * arrofNums.length);
        let resRand = arrofNums[rand];
        this.setState({randomNumber: resRand});
        if(resRand === 10) {
            console.log('You win');
        }
    }
    render() {
        return (
            <div>
                <h1>Number is {this.state.randomNumber}</h1>
                <h2 className="off">YOU WIN!!</h2>
                <button className="on" onClick={this.randNumber}>Random Number</button>
            </div>
        )
    }
}

export default Clicker;