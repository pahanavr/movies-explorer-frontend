import { PortfolioItem } from '../../ui/PortfolioItem/PortfolioItem';
import { portfolio, sectionHeaders } from '../../ui/variables/variables';
import styles from './Portfolio.module.css';

export const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.portfolio__title}>
        {sectionHeaders.portfolio}
      </h2>
      {Object.values(portfolio).map((work, i) => (
        <PortfolioItem key={i} href={work.link}>{work.title}</PortfolioItem>
      ))}
    </section>
  )
}