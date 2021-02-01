import React, {Component} from 'react';

import './App.css'

class ButtonList extends Component {
    static defaultProps = {
        colors: ['#e056fd', '#eb4d4b', '#badc58', '#f0932b']
    }
    render () {
        return (
            <div className="App-Wrapper">
            {this.props.colors.map(c => {
                const colorObj = {backgroundColor: c};
                return <button style={colorObj}>Click on me!</button>
            } )}
            </div>
        )
    }
}

export default ButtonList;