import css from 'components/Contacts/Contacts.module.css';

const Contacts = ({ contacts }) => (
  <ul className={css.contacts__list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contacts__item} key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
    ))}
  </ul>
);

export default Contacts;
