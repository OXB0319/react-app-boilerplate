/**
 * Created by xiaobing on 2016/7/25.
 */
import React,{Component} from 'react';

class  Contact extends Component{
    render(){
        return(<tr>
            <td>{this.props.name}</td>
            <td>{this.props.email}</td>
                </tr>);
    }
}
export default Contact;