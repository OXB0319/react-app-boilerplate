/**
 * Created by xiaobing on 2016/7/26.
 */
import React, {Component} from 'react';
import CurrentTrades from './currentTrades';
import PastTrades from './pastTrades';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            console.log('adasdasdasd');
            console.log(window.location.hash);
            this.setState({
                route: window.location.hash.substr(1)
            });
        });
    }

    render() {
        var Child;
        var classPast='', classCurrent='', classAbout='', classCurrent='';
        switch (this.state.route) {
            case '/':
                Child = CurrentTrades;
                classCurrent='active';
                break;
            case '/past':
                Child = PastTrades;
                classPast='active';
                break;
            case '/about':
                Child = PastTrades;
                classAbout='active';
                break;
            case '/concern':
                Child = PastTrades;
                classAbout='active';
                break;
            default:
                Child = CurrentTrades;
        }

        return (
            <div>
                <menu>
                    <ul className="nav nav-tabs">
                        <li><Link to="/"  activeClassName="active" >Current Trades</Link></li>
                        <li><Link to="/past"  activeClassName="active" >Past Trades</Link></li>
                        <li><Link to="/about"  activeClassName="active" >About</Link></li>
                        <li><Link to="/concern"  activeClassName="active" >Concern</Link></li>
                    </ul>
                </menu>
                <Child/>
            </div>
        );
    }
}

render((<Router>
    <Route path="/" component={App}>
        <IndexRoute component={PastTrades}/>
        <Route path="past" component={PastTrades} title="Past Trades" />
    </Route>
</Router>), document.getElementById('root'));
