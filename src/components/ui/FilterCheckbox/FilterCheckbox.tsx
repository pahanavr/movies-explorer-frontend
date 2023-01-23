import styles from './FilterCheckbox.module.css';
import cx from 'classnames';

type Props = {
  className?: string;
  filterCheckbox?: boolean;
  onChangeCheckboxValue?: () => void;
  shortMovie?: boolean;
}

export const FilterCheckbox = ({
  className, 
  onChangeCheckboxValue,
  shortMovie
}: Props) => {

  return (
    <div className={cx(styles.filterCheckbox, className)}>
      <label
        className={styles.filterCheckbox__label}
      >
        <input
          type='checkbox'
          name='filter'
          className={styles.filterCheckbox__input}
          onChange={onChangeCheckboxValue}
          checked={shortMovie}
        />
        <span className={styles.filterCheckbox__switch}></span>
      </label>
      <span className={styles.filterCheckbox__description}>Короткометражки</span>
    </div>
  )
};
