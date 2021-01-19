import React, {Component} from 'react';
import './App.css';

class Coin extends Component {
 state = {
     face: 'cara'
 }
 flip = curState => {
    return {face: curState.face === 'cara' ? 'cruz' : 'cara'};
}
    render() {
        return (
            <section className="App-wrapper">
                <h1>Let's Flip a Coin</h1>
                <div className="Ball">
                    {this.state.face}
                </div>
                <button onClick={this.flip}>Flip it Here!</button>
            </section>
        )
    }
}

export default Coin;