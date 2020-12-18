

class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        let isWinner = (s1 === s2) && (s2 === s3);
        const colors = {fontSize: '50px', backgroundColor: 'hotpink'}
        return (
            <div className="Machine">
                <h2 style={colors}>
                    {s1}
                    {s2}
                    {s3}
                </h2>
               <h3 className={isWinner ? 'win' : 'lose'}>
                   {isWinner ? 'You Win!!!': 'You Loose !!!!'}
                </h3>
            </div>
        )
    }
}