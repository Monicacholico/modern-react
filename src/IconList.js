import React, {Component} from 'react';
import './App.css';

class IconList extends Component {
    static defaultProps = {
        options: [
            'angry',
            'anchor',
            'archive',
            'at',
            'archway',
            'baby',
            'bell',
            'bolt',
            'bone',
            'car',
            'city',
            'cloud',
            'couch'
        ]
    };
    state = {
        icons:  []
    }
    // addIcon = () => {
    //     let idx = Math.floor(Math.random() * this.props.options.length);
    //     let newIcon = this.props.options[idx];
    //     let icons = this.state.icons;
    //     icons.push(newIcon);
    //     this.setState({icons: icons});
    // }
    addIcon = () => {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({icons : [...this.state.icons, newIcon]});
    }
    render() {
        const icons = this.state.icons.map( i => <i className={`fas fa-${i}`}/>);
        return (
            <div className="App-wrapper">
                <h1>List of Icons here!</h1>
                <div className="App-icon-wrapper">
                {icons}
                </div>
                <button onClick={this.addIcon}>Add Icon</button>
            </div>
        );
    }
}

export default IconList;