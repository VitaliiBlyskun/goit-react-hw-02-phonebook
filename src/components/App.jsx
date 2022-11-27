// import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// import { ContactList } from './contactList/ContactList';
import Form from './form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  // formSubmitHandler = data => {
  //   console.log(data)
  // }

  
  formSubmitHandler = ({name, number}) => {
    console.log(name + ': ' + number)
  }

  

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
      <Form propOnSubmit={this.formSubmitHandler}/>

      
        <h2>Contacts</h2>

        <p></p>
        {/* <ContactList /> */}
      </div>
    );
  }
}

