import React, {Component} from 'react';
import Coin from './Coin';


import './App.css'

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
        this.setState( ({
            currFace: flipFaced
        }))
    }


    render() {
        return (
            <div className='Flip-wrapper'>
            <Coin face={this.state.currFace}/>
                <button onClick={this.flip}>Flip the Coin!</button>
            </div>
        )
    }
}

export default FlipManager;