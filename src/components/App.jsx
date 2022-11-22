import React, { Component } from 'react';
import Form from './Form';

export class App extends Component {
  state = {
    contacts: [],

  };

  formSubmitHandler = data => {
    console.log(data)
  }


  render() {
    return (
      <Form onSubmit={this.formSubmitHandler}/>
    );
  }
}
