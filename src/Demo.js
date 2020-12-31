import React, {Component} from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        console.log((this.props))
        this.state = { color: 'cyan' }
    }
    render () {
        return (
            <h1>{this.state.color}</h1>
        )
    }
}

export default Demo;