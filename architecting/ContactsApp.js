/**
 * Created by xiaobing on 2016/7/25.
 */
import React, {Component} from 'react';
import {render} from 'react-dom'
import  SearchBar from './SearchBar';
import ContactList from './ContactList';

let contacts = [
    {name: "Cassio Zen", email: "cassiozen@gmail.com"},
    {name: "Dan Abramov", email: "gaearon@somewhere.com"},
    {name: "Pete Hunt", email: "floydophone@somewhere.com"},
    {name: "Paul O’Shannessy", email: "zpao@somewhere.com"},
    {name: "Ryan Florence", email: "rpflorence@somewhere.com"},
    {name: "Sebastian Markbage", email: "sebmarkbage@here.com"},
];

class ContactsApp extends Component {
    constructor(){
        super();
        this.state={
            filterText: ''
        };
    }

    handleUserInput(searchTerm){
        this.setState({filterText:searchTerm})
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
                <ContactList contacts={this.props.contacts}  filterText={this.state.filterText}/>
            </div>
        );
    }
}
;

render(<ContactsApp contacts={contacts}/>, document.getElementById('root'));