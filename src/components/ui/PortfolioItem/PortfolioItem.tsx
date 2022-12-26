import styles from './PortfolioItem.module.css';
import arrowIcon from '../../../images/arrow_icon.svg';

type Props = {
  children?: string;
  href?: string;
}

export const PortfolioItem = ({
  children,
  href,
}: Props) => {
  return (
    <a href={href} className={styles.portfolioItem}>
      <p className={styles.portfolioItem__title}>
        {children}
      </p>
      <img className={styles.portfolioItem__icon} src={arrowIcon} alt='arrowIcon' />
    </a>
  )
}