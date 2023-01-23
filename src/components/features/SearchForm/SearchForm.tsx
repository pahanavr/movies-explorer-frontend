import { Clickable } from '../../ui/Clickable/Clickable';
import { FilterCheckbox } from '../../ui/FilterCheckbox/FilterCheckbox';
import { Input } from '../../ui/Input/Input';
import { buttons } from '../../ui/variables/variables';
import styles from './SearchForm.module.css';

type Props = {
  onChangeCheckboxValue?: () => void;
  onSearch?: Function;
  shortMovie?: boolean;
  onSubmit?: any;
  defaultValue?: string;
}

export const SearchForm = ({
  onChangeCheckboxValue,
  onSearch,
  shortMovie,
  onSubmit,
  defaultValue,
}: Props) => {

  return (
    <section className={styles.searchForm}>
      <form className={styles.searchForm__form} onSubmit={onSubmit}>
        <Input
          labelClassName={styles.searchForm__label}
          className={styles.searchForm__input}
          name='search'
          type='search'
          placeholder='Фильм'
          onChange={onSearch}
          defaultValue={defaultValue}
        >
          <Clickable
            type='submit'
            className={styles.searchForm__submitButton}
          >
            {buttons.search}
          </Clickable>
        </Input>
      </form>
      <FilterCheckbox
        className={styles.searchForm__filter}
        onChangeCheckboxValue={onChangeCheckboxValue}
        shortMovie={shortMovie}
      />
    </section>
  )
}