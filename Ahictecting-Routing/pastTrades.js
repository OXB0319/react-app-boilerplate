/**
 * Created by xiaobing on 2016/7/26.
 */
import React, {Component}  from 'react';
import TradeList from './TradeList';
class PastTrades extends Component {
    constructor() {
        super();
        this.state = {trades: []}
    }

    componentDidMount() {
        this.props.route.data.then((data)=> {
            console.log(data);
            this.setState({trades: data.trades})
        });
    }

    render() {
        return (
            <div><h2>{this.props.route.title}</h2>
                <TradeList key={this.props.route.title} trades={this.state.trades}/>
            </div>);
    }
}

export default PastTrades;
