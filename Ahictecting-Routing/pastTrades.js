/**
 * Created by xiaobing on 2016/7/26.
 */
import React,{Component}  from 'react';

class  PastTrades extends Component{
    constructor(){
        super();
        this.state = {pastTrades:[]}
    }

    componentDidMount(){
        this.props.route.data.then((data)=>this.setState({pastTrades:data.trades}))
        }

    render(){
        let pastTrades = this.state.pastTrades.map((trade)=>(<div key={trade.id}>{trade.stockSymbol}</div>))
        return(<div>Past Trades{pastTrades}</div>);
    }
}

export default PastTrades;
