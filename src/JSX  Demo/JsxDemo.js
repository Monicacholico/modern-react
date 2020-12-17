
function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
        return moods[Math.floor(Math.random() * moods.length)];
}

class JsxDemo extends React.Component {

    render() {
        return(
            <div>
                <h1>My current mood is: {getMood()}</h1>
                <p>This is a demo!</p>
                <img src="https://source.unsplash.com/random"/>
            </div>
        )
    }
}


ReactDOM.render(<JsxDemo />, document.getElementById('root2'));