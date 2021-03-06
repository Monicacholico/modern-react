import React, {Component} from 'react';
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando';
import BrokenClick from './BrokenClick';
import Clicker from './Clicker';
import ScoreKeeper from './Scorekeeper';
import IconList from './IconList';
import Ball from './Ball';
import Lottery from './Lottery';
import Coin from './Coin';
import FlipManager from './FlipManager';
import BoxesContainer from './BoxesContainer';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import ButtonList from './ButtonList';
import NumberList from './NumberList';


import './App.css'


class App extends Component {
    render() {
        return (
            <div className="App-wrapper">
                {/* <Game color="purple"/> */}
                {/* <Demo animal="Bobcat" food="Pineapple"/> */}
                {/* <Rando maxNum={7}/> */}
                {/* <BrokenClick/> */}
                {/* <Clicker/> */}
                {/* <ScoreKeeper/> */}
                {/* <IconList/> */}
                {/* <Ball num={17}/> */}
                {/* <Lottery />
                <Lottery title={'Mini Daily'} maxNum={40} maxBalls={4}/> */}
                {/* <FlipManager /> */}
                {/* <BoxesContainer /> */}
                {/* <WiseSquare />
                <AnnoyingForm/>
                <CopyDemo/> */}
                {/* <ButtonList/> */}
                <NumberList/>
            </div>
        )
    }
}

export default App;