import styles from './Clickable.module.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';

type Props = {
  href?: string;
  children?: JSX.Element | JSX.Element[] | string;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

export const Clickable = ({
  href,
  children,
  type = 'button',
  className,
  onClick,
}: Props) => {
  return (
    href ?
      <Link
        className={cx(styles.link, className)}
        to={href}
      >
        {children}
      </Link>
      :
      <button
        onClick={onClick}
        className={cx(styles.button, className)}
        type={type}
      >
        {children}
      </button>
  )
}