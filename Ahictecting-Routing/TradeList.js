/**
 * Created by xiaobing on 2016/7/29.
 */
import React, {Component} from 'react';
import Trade from './Trade';

class TradeList extends Component {
    render() {
        let tradeList = this.props.trades.map((trade)=>(<Trade key={trade.id} trade={trade}/>));
        return (<table className="table table-striped">
            <thead>
            <tr>
                <th>
                    Symbol
                </th>
                <th>
                    CompanyName
                </th>
            </tr>
            </thead>
            <tbody>
            {tradeList}
            </tbody>
        </table>);
    }
}
export default TradeList;
