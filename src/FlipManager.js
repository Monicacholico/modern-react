import React, {Component} from 'react';
import Coin from './Coin';


import './App.css'
import './Flip.css'

// let arrFaces = ['cara', 'cruz'];
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
            numofFlips: this.state.numofFlips + 1,
            numofHeads: this.state.currFace === 'cara' ? this.state.numofHeads + 1 : this.state.numofHeads,
            numofTails: this.state.currFace === 'cruz' ? this.state.numofTails + 1 : this.state.numofTails
        }))
    }
    render() {
        return (
            <div className='Flip-wrapper'>
            <Coin face={this.state.currFace}/>
                <button className="Flip-button" onClick={this.flip}>Flip the Coin!</button>
                <h3>Out of {this.state.numofFlips} there have been {this.state.numofHeads} and {this.state.numofTails}</h3>
            </div>
        )
    }
}

export default FlipManager;