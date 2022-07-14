import { nanoid } from 'nanoid';
import css from 'components/Contacts/Contacts.module.css';

const id = nanoid();

const Contacts = () => {
  return (
    <ul className={css.contacts__list}>
      <li key={id} className={css.contacts__item}>
        123
      </li>
      <li key={id} className={css.contacts__item}>
        321
      </li>
    </ul>
  );
};

export default Contacts;
