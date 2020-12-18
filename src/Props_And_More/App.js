class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                to="Ringo"
                from="Paul"
                bangs={4}
                img="https://source.unsplash.com/random"
                />
                <Hello
                to="Cher"
                from="Sony"
                bangs={8}
                />
            </div>
        )
    }
}

ReactDOM.render(< App/>, document.getElementById('root'));