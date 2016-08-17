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
            <div ref="accountInfo" style={{width:'80%',margin:'auto'}}>
                <div className="col-xs-3" style={{textAlign:'right'}}>name:</div>
                <input ref="userName" className="col-xs-3" type="text"
                       onChange={this.onChangeFieldHandler.bind(this)} placeholder="please input user name"
                       value={this.state.account.userName}/>

                <div className="col-xs-3" style={{textAlign:'right'}}>age:</div>
                <input ref="age" type="text" className="col-xs-3" onChange={this.onChangeFieldHandler.bind(this)}
                       placeholder="please input user age" value={this.state.account.age}/>
            </div>
            <div className="col-xs-12">
                <input type="button" className="btn-default" value="Submit"
                       onClick={this.onCreateAccount.bind(this)}/>
                <label>{this.props.account.userName}</label>
            </div>
        </div>);
    }
}

export  default  Account;