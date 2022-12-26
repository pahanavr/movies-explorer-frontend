import { Clickable } from '../../ui/Clickable/Clickable';
import styles from './Promo.module.css';
import promoLogo from '../../../images/promo_logo.svg';
import { buttons } from '../../ui/variables/variables';

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promo__text}>
        <h1 className={styles.promo__title}>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className={styles.promo__subtitle}>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя
        </p>
        <Clickable
          className={styles.promo__button}
        >
          {buttons.more}
        </Clickable>
      </div>
      <img src={promoLogo} alt='promoLogo' />
    </section>
  )
}