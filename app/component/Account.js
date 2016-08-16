/**
 * Created by ouxiaobing on 16/7/31.
 */
import React, {Component} from 'react';

class Account extends Component {

    constructor() {
        super();
        this.state = {};
    }

    onCreateAccount() {
        this.props.onCreateAccount(this.state.account);
    }

    componentWillMount() {
        this.setState({account: this.props.account});
    }

    componentDidMount() {

    }

    componentWillUpdate() {
        console.log('account componentWillUpdate');
    }

    componentDidUpdate() {
    }


    onChangeFieldHandler(e) {
        let account = {
            userName: this.refs.userName.value,
            age: this.refs.age.value
        };
        this.setState({account: account});
    }

    render() {
        console.log('render');
        return (<div>
            <h1>This is account</h1>
            <div>


            </div>
        </div>);
    }
}

export  default  Account;