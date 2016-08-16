/**
 * Created by ouxiaobing on 16/7/31.
 */
import React, {Component} from 'react';

class Account extends Component {

    constructor(){
        super();
        this.state = {};
    }

    onCreateAccount(){
        console.log('this.state.account');
        console.log(this.state.account);
        this.props.onCreateAccount(this.state.account);
    }

    componentWillMount(){
        this.setState({account: this.props.account});
    }

    componentDidMount(){

    }

    componentWillUpdate(){
        console.log('account componentWillUpdate');
    }

    componentDidUpdate(){
    }


    onChangeFieldHandler(e){
        let account = {
            userName: this.refs.userName.value,
            age: this.refs.age.value
        };
        this.setState({account: account});
    }

    render() {
        console.log('render');
        return (<div><h1>This is account</h1>
            <ul>
                <li className="row" style={{listStyleType:'none',marginTop:'4px'}}>
                    <label className="col-sm-2">userName:</label>
                    <input ref="userName" className="" type="text" onChange={this.onChangeFieldHandler.bind(this)}  placeholder="please input user name" value={this.state.account.userName} />
                </li>
                <li className="row" style={{listStyleType:'none',marginTop:'4px'}}>
                    <label className="col-sm-2"> age: </label>
                    <input ref="age" className="" type="text" onChange={this.onChangeFieldHandler.bind(this)}  placeholder="please input user age"  value={this.state.account.age} />
                </li>
            </ul>
            <input type="button" className="btn-default" value="Submit" onClick={this.onCreateAccount.bind(this)}/>
            <label>{this.props.account.userName}</label>
        </div>);
    }
}

export  default  Account;