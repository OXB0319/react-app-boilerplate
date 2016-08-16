import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import BookStore from './component/BookStore';
import Account from './component/Account';
import $ from 'jquery';
import store from './store';
import constants from './Constants';
import {connect, Provider} from 'react-redux';
import routeAction from './actions/routeAction';
import accountAction  from './actions/accountAction';

class App extends Component {
    constructor() {
        super();
        this.state ={}
    }

    componentWillMount(){
        console.log(this.props);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() =>
            this.setState(store.getState())
        );

        this.state.onChangeRoute = this.props.onChangeRoute;
    }

    componentWillUnMount() {
        this.unsubscribe();
    }

    componentWillUpdate(){
        console.log('点击事件');
        console.log(this.props);
    }

    menuClickHandler() {
        this.refs.navMenu.style.display = this.refs.navMenu.style.display == 'block' ? 'none' : 'block';
    }

    onChangeRoute(path, e) {
        this.refs.navMenu.style.display = 'none';
        this.state.onChangeRoute(path);
    }


    render() {
        var Child;
        switch (this.props.path) {
            case 'account':
                Child = Account;
                break;
            case 'bookstore':
                Child = BookStore;
                break;
            default:
                Child = Account;
        }

        return (
            <div style={{height: '100%'}}>
                <div className="" ref='navMenu' id="navMenu"
                     style={{position:'relative',display:'none', float:'left', zIndex:'5',boxShadow:'-3px -3px 3px #aaaaaa inset',backgroundColor:'white',height:'100%',borderRight:'1px solid black'}}>
                    <ul className="nav">
                        <li style={{borderBottom:'1px solid black'}}>
                            <a onClick={this.onChangeRoute.bind(this,'account')}>个人信息</a>
                        </li>
                        <li style={{borderBottom:'1px solid black'}}>
                            <a onClick={this.onChangeRoute.bind(this,'bookstore')}>书库</a>
                        </li>
                    </ul>
                </div>
                <div style={{height:'40px',backgroundColor:'grey'}}>
                    <header>
                        <input type="button" style={{position:'relative',top:'5px',left:'5px'}} id="btnMenu"
                               value="Menu" onClick={this.menuClickHandler.bind(this)}/>
                    </header>
                </div>
                <Child onCreateAccount={this.props.onCreateAccount} account={this.props.account}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        account: state.accountReducer.account,
        path : state.routeReducer.path
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeRoute: (path) => dispatch(routeAction.changePath(path)),
        onCreateAccount: (account) => dispatch(accountAction.createAccount(account))
    }
};

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

render(
    <Provider store={store}>
        <BankAppContainer/>
    </Provider>,
    document.getElementById('root')
);
