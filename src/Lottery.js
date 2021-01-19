import React, {Component} from 'react';
import Ball from './Ball';


import './App.css';
import './Ball.css';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 400
    }

    state = {
        nums : Array.from({length: this.props.maxBalls}, () => Math.floor(Math.random() * this.props.maxNum) + 1)
    }

    generate = () => {
        this.setState(curState => ({
            nums: curState.nums.map
            (n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
    }

    handleClick = () => {
        this.generate();
    }

    render() {
        console.log(this.state)
        return (
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div className="Ball-wrapper">
                    {this.state.nums.map(n => <Ball num={n} />)}
                </div>
                <button className="Lottery-button" onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery;