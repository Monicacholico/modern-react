class App extends React.Component {
    render() {
        return (
            <div>
                <h2>We'll put all our components here!!!</h2>
                <Friend
                // key={id}
                name="Elton"
                hobbies={['dancing', 'piano']}
                />
                <Friend
                // key={id}
                name="Frida"
                hobbies={['ballet', 'movies', 'cooking']}
                />

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));