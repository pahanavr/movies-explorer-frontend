import { Clickable } from '../../ui/Clickable/Clickable';
import { FilterCheckbox } from '../../ui/FilterCheckbox/FilterCheckbox';
import { Input } from '../../ui/Input/Input';
import { buttons } from '../../ui/variables/variables';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <section className={styles.searchForm}>
      <form className={styles.searchForm__form}>
        <Input
          labelClassName={styles.searchForm__label}
          className={styles.searchForm__input}
          name='search'
          type='search'
          placeholder='Фильм'
          required={true}
        >
          <Clickable
            type='submit'
            className={styles.searchForm__submitButton}
          >
            {buttons.search}
          </Clickable>
        </Input>
      </form>
      <FilterCheckbox className={styles.searchForm__filter} />
    </section>
  )
}