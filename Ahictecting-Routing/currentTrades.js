/**
 * Created by xiaobing on 2016/7/26.
 */
import React,{Component}  from 'react';

class  CurrentTrades extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            trades: []
        }
    }

    componentDidMount(){
        console.log('current render');
        this.props.route.data.then(data=> this.setState({trades:data.trades}));
    }

    render(){
        let currentTrades = this.state.trades.map((trade) =>(<div key={trade.id}> {trade.stockSymbol}</div>));
        return(<div><div>{this.props.route.title}</div>{currentTrades}</div>);
    }
}

export default CurrentTrades;
