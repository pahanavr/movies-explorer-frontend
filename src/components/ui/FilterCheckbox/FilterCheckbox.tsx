import styles from './FilterCheckbox.module.css';

import cx from 'classnames';

export const FilterCheckbox = ({ className }: { className?: string }) => {
  return (
    <div className={cx(styles.filterCheckbox, className)}>
      <label
        className={styles.filterCheckbox__label}
      >
        <input
          type='checkbox'
          name='filter'
          className={styles.filterCheckbox__input}
        />
        <span className={styles.filterCheckbox__switch}></span>
      </label>
      <span className={styles.filterCheckbox__description}>Короткометражки</span>
    </div>
  )
};
