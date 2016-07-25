/**
 * Created by xiaobing on 2016/7/25.
 */
import React, {Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => (contact.name.indexOf(this.props.filterText) !== -1 ||contact.email.indexOf(this.props.filterText) !== -1)
        );

        let contacts = filteredContacts.map((contact)=>(
            <Contact key={contact.name} name={contact.name} email={contact.email}/>
        ));

        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                </tr>
                </thead>
                <tbody>{contacts}</tbody>
            </table>
        );

    }
}
;

export default ContactList;
