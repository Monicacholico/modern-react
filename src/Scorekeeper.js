import React, {Component} from 'react';


class ScoreKeeper extends Component {

    state = {
        score: 0
    }

    singleKill = () => {
        this.setState({score: this.state.score + 1});
    }
    // tripleKill = () => {
    //     // this.setState({score: this.state.score + 3});
    //     this.setState(curState => {return {score: curState.score + 1}})
    //     this.setState(curState => {return {score: curState.score + 1}})
    //     this.setState(curState => {return {score: curState.score + 1}})
    // }

    incrementScore = (curState) => {
        return {score: curState.score + 1};
    }

    tripleKill = () => {
        this.setState(this.incrementScore)
        this.setState(this.incrementScore)
        this.setState(this.incrementScore)
    }


    render() {
        return (
            <div>
                <h1> Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Single Kill</button>
            </div>
        )
    }
}

export default ScoreKeeper;