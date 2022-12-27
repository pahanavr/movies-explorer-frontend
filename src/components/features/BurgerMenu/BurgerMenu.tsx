import styles from './BurgerMenu.module.css';
import cx from 'classnames';
import { Clickable } from '../../ui/Clickable/Clickable';
import { links } from '../../ui/variables/variables';
import { Account } from '../../ui/Account/Account';

type Props = {
  className?: string;
}

export const BurgerMenu = ({
  className,
}: Props) => {
  return (

    <nav className={cx(styles.burger, styles.burger_type_active, className)}>
      <div className={styles.burger__container}>
        <div className={styles.burger__links}>
          <Clickable
            href={links.main.link}
            className={styles.burger__link}
          >
            {links.main.title}
          </Clickable>
          <Clickable
            href={links.movies.link}
            className={styles.burger__link}
          >
            {links.movies.title}
          </Clickable>
          <Clickable
            href={links.savedFilms.link}
            className={styles.burger__link}
          >
            {links.savedFilms.title}
          </Clickable>
        </div>
        <Account />
      </div>
    </nav>
  )
}