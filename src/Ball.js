import React, {Component} from 'react';

class Ball extends Component {
    render() {
        // let arrNumbers = Array.from({length: 40}, map(el => el))
        let arrNumbers = [];
        let randNumber = Math.floor(Math.random * [...arrNumbers.length]) + 1;
        console.log(randNumber)
        return (
            <h2>
                {randNumber}
            </h2>
        )
    }
}

export default Ball;