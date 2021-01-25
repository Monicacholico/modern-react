import React, {Component} from 'react';
import Coin from './Coin';


import './App.css'
import './Flip.css'

class FlipManager extends Component {
    static defaulProps = {
    }
    state = {
        currFace : null,
        numofFlips : 0,
        numofHeads : 0,
        numofTails : 0
    }
    flip = () => {
        let twoFaces = ['cara', 'cruz'];
        let idxFaces = Math.floor(Math.random() * twoFaces.length)
        console.log(idxFaces);
        let flipFaced = twoFaces[idxFaces];
        console.log(flipFaced);
        this.setState(curState => ({
            currFace: flipFaced,
            numofFlips: curState.numofFlips + 1,
            numofHeads: curState.numofHeads += (flipFaced === 'cara' ?  1 : 0),
            numofTails: curState.numofTails += (flipFaced === 'cruz' ?  1 : 0),
        }))
    }
    render() {
        return (
            <div className='Flip-wrapper'>
                <Coin face={this.state.currFace}/>
                <button className="Flip-button" onClick={this.flip}>Flip the Coin!</button>
                <h3>Out of {this.state.numofFlips} there have been {this.state.numofHeads} heads and {this.state.numofTails} tails</h3>
            </div>
        )
    }
}

export default FlipManager;