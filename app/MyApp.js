/**
 * Created by xiaobing on 2016/7/21.
 */
import React, {Component} from 'react';
import List from './List';

let {input, form} = React.DOM;
class MyApp extends Component {
    render() {
        let myElment = input({type: "text", placeholder: "test react element"});
        return (<div className="app">
                {myElment}
                <List key="todo" id='todo' title="To Do" cards={this.props.cards.filter((card) => card.status === "todo")}/>
                <List key="in-progress" id='in-progress' title="In Progress"
                      cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
                <List key="done" id='done' title='Done' cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        );
    }
}

export default MyApp;