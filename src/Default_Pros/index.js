class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                from="John"
                to="Paul"
                bangs= {3}
                />
                <Hello
                from="George"

                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));