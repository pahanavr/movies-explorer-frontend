import styles from './PortfolioItem.module.css';
import arrowIcon from '../../../images/arrow_icon.svg';
import cx from 'classnames';

type Props = {
  children?: string;
  href?: string;
  className?: string;
}

export const PortfolioItem = ({
  children,
  href,
  className,
}: Props) => {
  return (
    <a target={'_blank'} href={href} className={cx(styles.portfolioItem, className)}>
      <p className={styles.portfolioItem__title}>
        {children}
      </p>
      <img className={styles.portfolioItem__icon} src={arrowIcon} alt='arrowIcon' />
    </a>
  )
}