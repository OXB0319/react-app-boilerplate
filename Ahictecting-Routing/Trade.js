/**
 * Created by ouxiaobing on 16/7/30.
 */
import React, {Component} from'react';

class Trade extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.trade.stockSymbol}</td>
                <td>{this.props.trade.companyName}</td>
            </tr>);
    }
}

export  default  Trade;