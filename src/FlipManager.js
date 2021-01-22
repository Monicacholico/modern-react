import React, {Component} from 'react';
import Coin from './Coin';


import './App.css'

// let arrFaces = ['cara', 'cruz'];
class FlipManager extends Component {
    static defaulProps
    state = {
        faces : ['cara', 'cruz'],
        numofFlips : 0,
        numofHeads : 0,
        numofTails : 0
    }
    flip = () => {
        this.setState( curState => ({
            faces: curState.faces.map(f => Math.floor(Math.random() * this.props.faces))
        }))
    }


    render() {
        return (
            <div className='Flip-wrapper'>
                <Coin/>
                <button onClick={this.flip}>Flip the coin!</button>
            </div>
        )
    }
}

export default FlipManager;