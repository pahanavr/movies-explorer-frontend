import { Header } from '../../features/Header/Header';
import { Clickable } from '../../ui/Clickable/Clickable';
import { Input } from '../../ui/Input/Input';
import { buttons, labels } from '../../ui/variables/variables';
import styles from './Profile.module.css';
import cx from 'classnames';

export const Profile = () => {
  return (
    <main className={styles.profile}>
      <Header isLoggedIn />
      <section className={styles.profile__main}>
        <h2 className={styles.profile__title}>
          Привет, Павел!
        </h2>
        <form className={styles.profile__form}>
          <fieldset className={styles.profile__formField}>
            <Input
              labelClassName={styles.profile__label}
              className={styles.profile__input}
              name='name'
            >
              <span className={styles.profile__inputName}>{labels.name}</span>

            </Input>
            <Input
              labelClassName={styles.profile__label}
              className={styles.profile__input}
              name='email'
            >
              <span className={styles.profile__inputName}>{labels.email}</span>
            </Input>
          </fieldset>
          <div className={styles.profile__buttons}>
            <Clickable
              className={styles.profile__button}
            >
              {buttons.edit}</Clickable>
            <Clickable
              className={cx(styles.profile__button, styles.profile__button_type_red)}
            >
              {buttons.logout}</Clickable>
          </div>
        </form>
      </section>
    </main>
  )
}