import React, {Component} from 'react';
import Coin from './Coin';


import './App.css'

class FlipManager extends Component {
    static defaulProps
    state = {
        faces : ['cara', 'cruz']
    }

    render() {
        return (
            <div className='Flip-wrapper'>
                <Coin/>
            </div>
        )
    }
}

export default FlipManager;