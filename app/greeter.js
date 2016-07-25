/**
 * Created by xiaobing on 2016/7/25.
 */
import React,{Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Card from './Card'

class Greeter extends Component {
    render() {
        return (
            <h1>{this.props.salutation}</h1>
        )
    }
}

Greeter.propTypes = {
    salutation: PropTypes.array,
    card:PropTypes.element
}

Greeter.defaultProps={
    salutation:[],
    card:Card
}

render(<Greeter />, document.getElementById('root'));