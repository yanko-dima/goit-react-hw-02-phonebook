import { Component } from 'react';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Contacts from 'components/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Yanko Dmytro' },
      { id: 'id-2', name: 'Baraban Vladimir' },
      { id: 'id-3', name: 'Talko Vladislav' },
    ],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <Section title={'Phonebook'}>
          <Phonebook name={name} />
        </Section>
        <Section title={'Contacts'}>
          <Contacts contacts={contacts} />
        </Section>
      </>
    );
  }
}
