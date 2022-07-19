import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Filter from './Filter/Filter';
import Contacts from 'components/Contacts';

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

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const id = nanoid(5);
    const contact = {
      id,
      name,
      number,
    };

    const checkedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    // if (checkedContact) {
    //   alert(`${name} is already in contacts`);
    //   return;
    // }

    // this.setState(prevState => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));

    checkedContact
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title={'Phonebook'}>
          <Phonebook onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} changeFilter={this.changeFilter} />
          <Contacts
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
