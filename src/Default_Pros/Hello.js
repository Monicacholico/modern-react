class Hello extends React.Component {
    static defaultProps = {
        to: "Anonymus",
        bangs: 1
    }
    render() {
        let bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <p>Hi {this.props.to}</p>
                <p>From {this.props.from}{bangs}</p>
            </div>
        )
    }
}