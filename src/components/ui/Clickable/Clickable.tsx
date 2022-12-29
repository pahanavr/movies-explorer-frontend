import styles from './Clickable.module.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';

type Props = {
  href?: string;
  children?: JSX.Element | JSX.Element[] | string;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
  blank?: boolean;
}

export const Clickable = ({
  href,
  children,
  type = 'button',
  className,
  onClick,
  blank = false,
}: Props) => {
  const target = blank ? { target: '_blank' } : {};

  return (
    href ?
      <Link
        className={cx(styles.link, className)}
        to={href}
        {...target}
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