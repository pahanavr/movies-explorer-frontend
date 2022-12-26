import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';
import { links, sectionHeaders } from '../../ui/variables/variables';
import styles from './AboutMe.module.css';
import myPhoto from '../../../images/my_photo.jpg';

export const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <SectionHeader className={styles.aboutMe__title}>
        {sectionHeaders.aboutMe}
      </SectionHeader>
      <div className={styles.aboutMe__main}>
        <div className={styles.aboutMe__text}>
          <h3 className={styles.aboutMe__name}>Павел</h3>
          <p className={styles.aboutMe__position}>Фронтенд-разработчик, 28 лет</p>
          <p className={styles.aboutMe__description}>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className={styles.aboutMe__link} href={links.github.link}>
            {links.github.title}
          </a>
        </div>
        <img className={styles.aboutMe__photo} src={myPhoto} alt='myPhoto' />
      </div>
    </section>
  )
}