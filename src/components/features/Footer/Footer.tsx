import { links } from '../../ui/variables/variables';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Учебный проект Яндекс.Практикум x BeatFilm.
      </p>
      <div className={styles.footer__info}>
        <p className={styles.footer__infoDate}>&#169;{new Date().getFullYear()}</p>
        <div className={styles.footer__infoLinks}>
          <a className={styles.footer__infoLink} href={links.yandex.link}>
            {links.yandex.title}
          </a>
          <a className={styles.footer__infoLink} href={links.github.link}>
            {links.github.title}
          </a>
        </div>
      </div>
    </footer>
  )
}