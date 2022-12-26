import { Clickable } from "../../ui/Clickable/Clickable"
import { links } from "../../ui/variables/variables";
import styles from './NavTab.module.css';
import cx from 'classnames';

export const NavTab = () => {
  return (
    <nav className={styles.navTab}>
      <Clickable
        href={links.registration.link}
        className={styles.navTab__link}
      >
        {links.registration.title}
      </Clickable>
      <Clickable
        href={links.enter.link}
        className={cx(styles.navTab__link, styles.navTab__link_type_button)}
      >
        {links.enter.title}
      </Clickable>
    </nav>
  )
}