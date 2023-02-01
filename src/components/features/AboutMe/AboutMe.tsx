import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';
import { links, sectionHeaders } from '../../ui/variables/variables';
import styles from './AboutMe.module.css';
import myPhoto from '../../../images/my_photo.jpg';
import cx from 'classnames';

export const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <SectionHeader className={styles.aboutMe__title}>
        {sectionHeaders.aboutMe}
      </SectionHeader>
      <div className={styles.aboutMe__main}>
      <img className={cx(styles.aboutMe__photo, styles.aboutMe__photo_adaptive_type)} src={myPhoto} alt='myPhoto' />
        <div className={styles.aboutMe__text}>
          <h3 className={styles.aboutMe__name}>Павел</h3>
          <p className={styles.aboutMe__position}>Фронтенд-разработчик, 28 лет</p>
          <p className={styles.aboutMe__description}>
            Я родился в Калининграде, после окончания университета уехал в Санкт-Петербург, где проработал 6 лет инженером-конструктором в корабельном конструкторском бюро.
            Последний год изучаю веб-разработку, что мне очень нравится, хочу задержаться в данной профессии и расти насколько это возможно и развиваться как профессионал.
          </p>
          <a target={'_blank'} className={styles.aboutMe__link} href={links.github.link}>
            {links.github.title}
          </a>
        </div>
        <img className={styles.aboutMe__photo} src={myPhoto} alt='myPhoto' />
      </div>
    </section>
  )
}
