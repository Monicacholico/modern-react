import React, {Component} from 'react';

class WiseSquare extends Component {
    dispenseWisdom() {
        // let firstMessage;
        let messages = [
            "A fool thinks himself to be wise, but a wise man know himself to be a fool.",
            "Educating the mind without educating the heart is no education at all.",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced."
        ];
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
        // let theMessage = messages[rIndex];
    }
    

    render() {
        let myFunction = this.dispenseWisdom();
        return (
            <div className="App-wrapper" onMouseEnter={this.dispenseWisdom}>
                <h2>I'm here</h2>
                
            </div>
        )
    }
}

export default WiseSquare;