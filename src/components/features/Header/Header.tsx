import styles from './Header.module.css';
import cx from 'classnames';
import { Logo } from '../../ui/Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { NavTab } from '../NavTab/NavTab';

export const Header = () => {
  const token = localStorage.getItem('jwt');

  return (
    <header className={cx(styles.header, token && styles.header_dark_type)}>
      <Logo />
      {token ?
        <Navigation />
        :
        <NavTab />
      }
    </header>
  )
}