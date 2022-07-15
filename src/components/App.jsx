import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Contacts from 'components/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = ({ name, number }) => {
    const id = nanoid(5);
    const client = {
      id,
      name,
      number,
    };
    console.log('client: ', client);
    this.setState(prevState => ({
      clients: [client, ...prevState.clients],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Section title={'Phonebook'}>
          <Phonebook onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Contacts contacts={contacts} />
        </Section>
      </>
    );
  }
}
