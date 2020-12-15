import React, {Component} from 'react';
import Star from './Star';

class Rating extends Component {
    static defaultProps = { max: 5};
    constructor(props) {
        super(props);
        this.state = {
            dynamicaValue: props.starts,
            value: 0
        };
        this._colors = {
            1: "#f44336",
            2: "#ff5722",
            3: "#ff9800",
            4: "#ffc107",
            5: "#ffeb3b"
        };
        this._meanings = {
            0: "No Rating",
            1: "Terrible",
            2: "Mediocre",
            3: "Average",
            4: "Solid",
            5: "Fantastic"
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleClick(newValue) {
        this.setState({
            value: newValue,
            dynamicaValue: newValue
        });
    }
    handleMouseEnter(newValue) {
        this.setState({
            dynamicaValue: newValue
        });
    }
    handleMouseLeave(newValue) {
        this.setState({dynamicaValue: this.state.value});
    }

    render() {
        const { dynamicaValue, value } = this.state;
        const starSpans = [];
        const max = this.props.max;
        let count = dynamicaValue;
        for (let v = 1; v <= max; v++) {
            starSpans.push(
                <Star
                key={v}
                color={this._colors[count]}
                isFilled={v <= dynamicaValue}
                value={v}
                handleHover={this.handleMouseEnter}
                handleHoverLeave={this.handleMouseLeave}
                handleClick={this.handleClick}
                />
            );
        }
        return (
            <div>
                <p>
                    {this._meanings[value]}
                    {starSpans}
                </p>
            </div>
        );
    }

}

export default Rating;