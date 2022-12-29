import styles from './Header.module.css';
import cx from 'classnames';
import { Logo } from '../../ui/Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { NavTab } from '../NavTab/NavTab';

type Props = {
  isLoggedIn?: boolean;
}

export const Header = ({
  isLoggedIn,
}: Props) => {
  return (
    <header className={cx(styles.header, isLoggedIn && styles.header_dark_type)}>
      <Logo />
      {isLoggedIn ?
        <Navigation />
        :
        <NavTab />
      }
    </header>
  )
}