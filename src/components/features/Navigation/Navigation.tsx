import { Clickable } from "../../ui/Clickable/Clickable"
import { links } from "../../ui/variables/variables";
import styles from './Navigation.module.css';
import cx from 'classnames';
import profileIcon from '../../../images/profile_icon.svg';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigations__moviesBox}>
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
      <div className={styles.navigation__profile}>
        <Clickable
          href={links.profile.link}
          className={styles.navigation__profileTitle}
        >
          {links.profile.title}
        </Clickable>
        <div className={styles.navigation__profileIconBox}>
          <img className={styles.navigation__profileIcon} src={profileIcon} alt='profileIcon' />
        </div>
      </div>
    </nav>
  )
}