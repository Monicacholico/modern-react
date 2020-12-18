

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if(num === 7) {
            msg = <div>
                <h2>Congrats! You're a winner</h2>
                <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp"/>
            </div>
        } else {
            msg = <p>Sorry, you don't get an image and you loose!</p>
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {msg}
                {/* <p>{num === 7 ? 'Congrats' : 'Unlucky'}</p>
                {
                    num === 7 &&
                     <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp"/>
                } */}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker/>, document.getElementById('root3'));