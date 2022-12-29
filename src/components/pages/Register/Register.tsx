import { Clickable } from '../../ui/Clickable/Clickable';
import { Input } from '../../ui/Input/Input';
import { buttons, labels, links } from '../../ui/variables/variables';
import { Logo } from '../../ui/Logo/Logo';
import styles from './Register.module.css';

export const Register = () => {
  return (
    <div className={styles.register}>
      <header className={styles.register__header}>
        <Logo className={styles.register__headerLogo} />
        <h2 className={styles.register__title}>Добро пожаловать!</h2>
      </header>
      <main className={styles.register__}>
        <form className={styles.register__form}>
          <Input
            labelClassName={styles.register__label}
            className={styles.register__input}
            type='text'
            name='name'
            label={labels.name}
          />
          <Input
            labelClassName={styles.register__label}
            className={styles.register__input}
            type='email'
            name='email'
            label={labels.email}
            required={true}
          />
          <Input
            labelClassName={styles.register__label}
            className={styles.register__input}
            type='password'
            name='password'
            label={labels.password}
            required={true}
          />
          <Clickable
            type='submit'
            className={styles.register__submitButton}
          >
            {buttons.signup}
          </Clickable>
          <div className={styles.register__enterContainer}>
            <p className={styles.register__enterText}>
              Уже зарегистрированы?
            </p>
            <Clickable
              className={styles.register__enterLink}
              href={links.enter.link}
            >
              {links.enter.title}
            </Clickable>
          </div>
        </form>
      </main>
    </div>
  )
}