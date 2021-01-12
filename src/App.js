import React, {Component} from 'react';
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando';
import BrokenClick from './BrokenClick';
import './App.css'
import Clicker from './Clicker';
import ScoreKeeper from './Scorekeeper';
import IconList from './IconList';
import Lottery from './Lottery';



class App extends Component {
    render() {
        console.log('changing');
        return (
            <div className="App">
                {/* <Game color="purple"/> */}
                {/* <Demo animal="Bobcat" food="Pineapple"/> */}
                {/* <Rando maxNum={7}/> */}
                {/* <BrokenClick/> */}
                {/* <Clicker/> */}
                {/* <ScoreKeeper/> */}
                {/* <IconList/> */}
                <Lottery/>
            </div>
        )
    }
}

export default App;