class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs);
        console.log(this.props)
        return (
            <div>
                <h3>Hello {this.props.to}</h3>
                <p>From: {this.props.from}{bangs}</p>
                <img src={this.props.img}/>
            </div>
        )
    }
}

