import React, {Component} from 'react';
import Ball from './Ball';

import './Ball.css';

class Lottery extends Component {
    static defaulProps = {
        title: 'This is the Title',
        numOfBalls : 0,
        maxNum : 0
    }
    state = {
        nums : Array.from({length: this.props.numOfBalls}, () => Math.floor(Math.random() * 400))
    }
    render() {
        console.log(this.state);
        return (
            <div className="App-wrapper">
                {/* <div className="App-ball">
                        <h1>Lotto 4</h1>
                        <div className="Ball-wrapper">
                            <Ball className='Ball'
                            num={23}
                            />
                            <Ball className="Ball"
                            num={17}
                            />
                    </div>
                </div> */}
                <section>
                    <h1>{this.props.title}</h1>
                    <div>
                        {this.state.nums.map(n => <Ball num={n}/>)}
                    </div>
                    <button onClick={this.handleClick}>Generate</button>
                </section>
            </div>
        )
    }
}

export default Lottery;