import { Component } from 'react';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Contacts from 'components/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    // const { contacts, name } = this.state;

    return (
      <>
        <Section title={'Phonebook'}>
          <Phonebook />
        </Section>
        <Section title={'Contacts'}>
          <Contacts />
        </Section>
      </>
    );
  }
}
