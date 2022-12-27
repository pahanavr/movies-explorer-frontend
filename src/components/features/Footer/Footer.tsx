import { links } from '../../ui/variables/variables';
import styles from './Footer.module.css';
import cx from 'classnames';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Учебный проект Яндекс.Практикум x BeatFilm.
      </p>
      <div className={styles.footer__info}>
        <p className={styles.footer__infoDate}>&#169;{new Date().getFullYear()}</p>
        <div className={styles.footer__infoLinks}>
          <a target={'_blank'} className={styles.footer__infoLink} href={links.yandex.link}>
            {links.yandex.title}
          </a>
          <a target={'_blank'} className={styles.footer__infoLink} href={links.github.link}>
            {links.github.title}
          </a>
        </div>
        <p className={cx(styles.footer__infoDate, styles.footer__infoDate_type_adaptive)}>&#169;{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}