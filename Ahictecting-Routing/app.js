/**
 * Created by xiaobing on 2016/7/26.
 */
import React, {Component} from 'react';
import CurrentTrades from './currentTrades';
import PastTrades from './pastTrades';
import {render} from 'react-dom';
import 'whatwg-fetch';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {CURRENT_TRADES,PAST_TRADES} from './const';
import  dataProvider from '../DataProvider/CustomDataProvirder'

let currentTrades = dataProvider.GetCurrentTrades();
let pastTrades = dataProvider.GetPastTrades();

class App extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            console.log('change has ');
            this.setState({
                route: window.location.hash.substr(1)
            });
        });
    }

    render() {
        return (
            <div>
                <menu>
                    <ul className="nav nav-tabs">
                        <li><Link to="/"  ref="Current" activeClassName="active" >{this.props.route.title.currentTrade}</Link></li>
                        <li><Link to="/past"  activeClassName="active" >{this.props.route.title.pastTrade}</Link></li>
                        <li><Link to="/about"  activeClassName="active" >About</Link></li>
                        <li><Link to="/concern"  activeClassName="active" >Concern</Link></li>
                    </ul>
                    {this.props.children}
                </menu>
            </div>
        );
    }
}

render((<Router history={hashHistory}>
    <Route path="/" component = {App} title={{currentTrade : CURRENT_TRADES, pastTrade : PAST_TRADES}}>
        <IndexRoute component={CurrentTrades}  title= {CURRENT_TRADES} data = {currentTrades} />
        <Route path="past" component= {PastTrades} title= {PAST_TRADES}  data = {pastTrades}/>
        <Route path="/" component= {CurrentTrades} title= {CURRENT_TRADES} />
    </Route>
</Router>), document.getElementById('root'));
