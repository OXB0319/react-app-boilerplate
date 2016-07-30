/**
 * Created by xiaobing on 2016/7/26.
 */
import React,{Component}  from 'react';
import TradeList from './TradeList';
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
        return(<div><h2>{this.props.route.title}</h2><TradeList trades = {this.state.trades}/></div>);
    }
}

export default CurrentTrades;
