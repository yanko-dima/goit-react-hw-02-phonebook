import PropTypes from 'prop-types';
import css from 'components/Contacts/Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={css.contacts__list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contacts__item} key={id}>
        <p>
          {name}: {number}
        </p>
        <button
          className={css.contacts__btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
