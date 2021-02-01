import React, {Component} from 'react';

class AnnoyingForm extends Component{
    handleKeyUp = (e) => {
        console.log(e);
        if(e.keyCode === 56) {
            alert('***** I love this character ******')
        } else {
            alert ('BoOOOO');
        }
    }
    render() {
        return (
            <div>
                <h3>Try Typing Anything in Here:</h3>
                <textarea onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}

export default AnnoyingForm;