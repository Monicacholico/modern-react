import React, {Component} from 'react';


class Game extends Component {

    // Without Babel transpiler YOu must use the following syntax

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         score: 0,
    //         gameOver: false
    //     }
    // }
    state = {
        score: 99,
        gameOver: false
    }
    render() {
        return (
            <div>
                <h1>Your Score Is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;