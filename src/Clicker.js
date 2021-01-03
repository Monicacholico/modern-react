import React, {Component} from 'react';


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

    }
    render() {
        let winner = <h2>YOU WIN!!!</h2>
        return (
            <div>
                <h1>Number is {this.state.randomNumber}</h1>
                {this.state.randomNumber === 10 ? winner : ''}
                {this.state.randomNumber !== 10 ? <button className="on" onClick={this.randNumber}>Random Number</button> : ''}
            </div>
        )
    }
}

export default Clicker;