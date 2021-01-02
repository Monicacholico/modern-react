import React, {Component} from 'react';
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando';
import BrokenClick from './BrokenClick';
import Clicker from './Clicker';
import './App.css'


class App extends Component {
    render() {
        console.log('changing');
        return (
            <div className="App">
                {/* <Game color="purple"/> */}
                {/* <Demo animal="Bobcat" food="Pineapple"/> */}
                {/* <Rando maxNum={7}/> */}
                {/* <BrokenClick/> */}
                <Clicker/>
            </div>
        )
    }
}

export default App;