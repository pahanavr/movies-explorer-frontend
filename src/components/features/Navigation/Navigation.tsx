import { Clickable } from '../../ui/Clickable/Clickable'
import { links } from '../../ui/variables/variables';
import styles from './Navigation.module.css';
import burgerIcon from '../../../images/burger_icon.svg';
import closeIcon from '../../../images/close_icon.svg';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { Account } from '../../ui/Account/Account';

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.navigation__moviesBox}>
          <Clickable
            href={links.movies.link}
            className={styles.navigation__link}
          >
            {links.movies.title}
          </Clickable>
          <Clickable
            href={links.savedFilms.link}
            className={styles.navigation__link}
          >
            {links.savedFilms.title}
          </Clickable>
        </div>
        <Account />
      </nav>
      {!activeMenu ?
        <Clickable
          className={styles.navigation__burgerButton}
          onClick={() => setActiveMenu(true)}
        >
          <img className={styles.navigation__burgerIcon} src={burgerIcon} alt='burgerIcon' />
        </Clickable>
        :
        <Clickable
          className={styles.navigation__closeButton}
          onClick={() => setActiveMenu(false)}
        >
          <img className={styles.navigation__closeIcon} src={closeIcon} alt='closeIcon' />
        </Clickable>
      }
      {activeMenu &&
        <BurgerMenu
          className={styles.navigation__burgerMenu}
        />
      }
    </>
  )
}