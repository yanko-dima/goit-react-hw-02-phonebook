import { nanoid } from 'nanoid';
import css from 'components/Contacts/Contacts.module.css';

const id = nanoid();

const Contacts = ({ contacts }) => (
  <ul className={css.contacts__list}>
    {contacts.map(({ id, name }) => (
      <li className={css.contacts__item} key={id}>
        <p>{name}</p>
      </li>
    ))}
  </ul>
);

export default Contacts;
