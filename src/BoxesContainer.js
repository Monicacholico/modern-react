import React, {Component} from 'react';
import Box from './Box';

import './Box.css';


class BoxesContainer extends Component {

    static defaultProps = {
    }
    state = {
        style : { backgroundColor: 'crimson'}
    }
    colorSettler = () => {
        let colorsArray = ['yellow', 'lightgreen', 'crimson', 'hotpink', 'staleblue', 'papayawhip'];
        let idxColorsArray = Math.floor(Math.random() * colorsArray.length);
        let curArColor = colorsArray[idxColorsArray];
        console.log(curArColor);
        alert(curArColor);
        // this.setState({
        //     style: curArColor
        // })
        // return `{backgroundColor: '${curArColor}'}`;
    }

    render() {
        // console.log(this.colorSettler());
        const applyingStyle = this.colorSettler();
        const styleColors = ['yellow', 'lightgreen', 'crimson', 'hotpink', 'staleblue', 'papayawhip'];
        let idxStyleColor = Math.floor(Math.random() * styleColors.length);
        // const displayBox = this.state.style
        // this.colorSettler()
        // console.log(applyingStyle);
        console.log(this.state.style)
        return (
            <div className="Box-Container">
                {/* <h2 style={{color: 'blue'}} className="Title-Container">I will hold a bunch of boxes here!</h2> */}
                {/* {<Box style={applyingStyle} />} */}
                <div onClick={this.colorSettler} style={this.state.style}>Hello World</div>
                {/* <Box style={{backgroundColor: 'crimson'}}/> */}
                {/* <Box onClick={this.colorSettler} role="button" /> */}
                <Box />
                <Box />
                <Box />
                <Box />
                <button onClick={this.colorSettler}>Click me</button>
            </div>
        )
    }
}

export default BoxesContainer;