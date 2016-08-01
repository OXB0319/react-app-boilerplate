import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import BookStore from './BookStore';
import Account from './Account';

class App extends Component {
    render() {
        return (
            <div>
                <header>Book Rent System</header>
                <menu>
                    <ul className="nav nav-tabs">
                        <li ><Link activeClassName="active" to="/account">个人信息</Link></li>
                        <li><Link activeClassName="active" to="/bookstore">书库</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        );
    }
}

render(<Router history={hashHistory}>
    <Route path="/" Component={App}>
        <IndexRoute Component={Account}/>
        <Route path="account" Componnet={Account}/>
        <Route path="bookstore" Componnet={BookStore}/>
    </Route>
</Router>, document.getElementById('root'));
