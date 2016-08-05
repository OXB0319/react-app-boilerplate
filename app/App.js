import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import BookStore from './BookStore';
import Account from './Account';
import $ from  'jquery';

class App extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        console.log('22222');
    }

    componentDidMount() {
        $(function() {
            $('button.navbar-toggle').click(function(){
                console.log(222222);
                $('body').toggleClass('out');
                $('nav.navbar-fixed-top').toggleClass('out');
                if ($('body').hasClass('out')) {
                    $(this).focus();
                } else {
                    $(this).blur();
                }
            });
        });
        console.log('11111');
    }

    render() {
        console.log(this.props);

        return (
            <div className="container">

                    <header><h1>Book Rent System</h1>
                    <input type="button" value="Menu" style={{}}/></header>
                    <aside id='aside'>
                        <menu>
                            <ul className="nav navbar-toggle">
                                <li><Link activeClassName="active" to="/account">个人信息</Link></li>
                                <li><Link activeClassName="active" to="/bookstore">书库</Link></li>
                            </ul>
                        </menu>
                    </aside>
                {this.props.children}
            </div>
        );
    }
}

render((<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Account}/>
        <Route path="account" component={Account}/>
        <Route path="bookstore" component={BookStore}/>
    </Route>
</Router>), document.getElementById('root'));
