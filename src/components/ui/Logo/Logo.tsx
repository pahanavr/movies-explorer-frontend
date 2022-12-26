import { Clickable } from '../../ui/Clickable/Clickable';
import logo from '../../../images/header_logo.svg'
import styles from './Logo.module.css';
import cx from 'classnames';

export const Logo = ({ className }: {className?: string}) => {
  return (
    <Clickable
      className={cx(styles.logo, className)}
      href='/'
    >
      <img className={styles.logo__image} src={logo} alt='headerLogo' />
    </Clickable>
  )
}