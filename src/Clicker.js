import React, {Component} from 'react';

class Clicker extends Component {
    state = {
        displayButton: true,
        message: 'YOU WIN',
        randomNumber: 0
    }
    render() {
        return (
            <div>
                <h1>Number is{this.state.randomNumber}</h1>
                <button onClick={}></button>
            </div>
        )
    }
}