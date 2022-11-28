import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
    
  }


  // formSubmitHandler = ({name, number}) => {
  //   console.log(name + ': ' + number)
  // }


  deleteItem = (itemId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id === itemId)
    }))

  }


  render() {
    const { contacts, filter } = this.state;
    const totalContactsCount = contacts.length;
    console.log(totalContactsCount);
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <p>Всього контактів: {totalContactsCount} </p>
        
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteItem} list={this.getVisibleContacts()}/>
      </div>
    );
  }
}
