import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class ContactForm extends Component {
  state = {
    name: '',
    number: '',

    
    // experience: 'junior',
    // licence: false,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    // console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  // hundleLicenceChange = event => {
  //   console.log(event.currentTarget.checked);
  //   this.setState({licence: event.currentTarget.checked})
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.nameInputId}
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.numberInputId}
            required
          />
        </label>
        <button type="submit" disabled={!this.state.name}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

