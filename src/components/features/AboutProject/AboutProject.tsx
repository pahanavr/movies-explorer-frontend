import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';
import styles from './AboutProject.module.css';
import cx from 'classnames';
import { sectionHeaders } from '../../ui/variables/variables';

export const AboutProject = () => {
  return (
    <section className={styles.project}>
      <SectionHeader
        className={styles.project__header}
      >
        {sectionHeaders.aboutProject}
      </SectionHeader>
      <div className={styles.project__textContainer}>
        <div className={styles.project__text}>
          <h4 className={styles.project__textTitle}>
            Дипломный проект включал 5 этапов
          </h4>
          <p className={styles.project__textSubtitle}>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className={styles.project__text}>
          <h4 className={styles.project__textTitle}>
            На выполнение диплом ушло 5 недель
          </h4>
          <p className={styles.project__textSubtitle}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className={styles.project__progress}>
        <div className={styles.project__progressBegin}>
          <p className={styles.project__progressText}>1 неделя</p>
        </div>
        <div className={styles.project__progressEnd}>
          <p className={styles.project__progressText}>4 недели</p>
        </div>
        <p className={cx(styles.project__progressText, styles.project__text_bold_type)}>
          Back-end
        </p>
        <p className={cx(styles.project__progressText, styles.project__text_bold_type)}>
          Front-end
        </p>
      </div>
    </section>
  )
}