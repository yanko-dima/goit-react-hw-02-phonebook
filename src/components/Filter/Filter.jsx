import css from 'components/Filter/Filter.module.css';

const Filter = ({ value, changeFilter }) => (
  <div className={css.filter}>
    <label className={css.filter__label}>
      {'Find contacts by name'}
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </label>
  </div>
);

export default Filter;
