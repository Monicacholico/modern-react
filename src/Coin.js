import React, {Component} from 'react';
import './App.css';
import './Coin.css';

class Coin extends Component {
    static defaultProps = {
        face: 'cara'
    }
    render() {
        return (
            <section className="Coin-wrapper">
                <div className="Coin">
                    {this.props.face}
                </div>
            </section>
            )
    }
}

export default Coin;