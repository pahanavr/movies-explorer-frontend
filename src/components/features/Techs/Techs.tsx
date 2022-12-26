import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';
import { sectionHeaders, techs } from '../../ui/variables/variables';
import styles from './Techs.module.css';

export const Techs = () => {
  return (
    <section className={styles.techs}>
      <SectionHeader className={styles.techs__title}>
        {sectionHeaders.techs}
      </SectionHeader>
      <div className={styles.techs__container}>
        <h3 className={styles.techs__mainTitle}>
          7 технологий
        </h3>
        <p className={styles.techs__description}>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className={styles.techs__tools}>
          {Object.values(techs).map((tech, i) => (
            <li key={i} className={styles.techs__tool}>
              <p className={styles.techs__toolText}>{tech}</p>
            </li>
          )
          )}
        </ul>
      </div>
    </section>
  )
}