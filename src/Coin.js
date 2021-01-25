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
                    <p className="Coin-text">{this.props.face}</p>
                </div>
            </section>
            )
    }
}

export default Coin;