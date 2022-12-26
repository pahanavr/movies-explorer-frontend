import { Clickable } from '../../ui/Clickable/Clickable';
import { Input } from '../../ui/Input/Input';
import { Logo } from '../../ui/Logo/Logo';
import { buttons, labels, links } from '../../ui/variables/variables';
import styles from './Login.module.css';

export const Login = () => {
  return (
    <div className={styles.login}>
      <Logo className={styles.login__headerLogo} />
      <h2 className={styles.login__title}>Рады видеть!</h2>
      <form className={styles.login__form}>
        <Input
          labelClassName={styles.login__label}
          className={styles.login__input}
          type='email'
          name='email'
          label={labels.email}
          required={true}
        />
        <Input
          labelClassName={styles.login__label}
          className={styles.login__input}
          type='password'
          name='password'
          label={labels.password}
          required={true}
        />
        <Clickable
          type='submit'
          className={styles.login__submitButton}
        >
          {buttons.signin}
        </Clickable>
        <div className={styles.login__enterContainer}>
          <p className={styles.login__enterText}>
            Еще не зарегистрированы?
          </p>
          <Clickable
            className={styles.login__enterLink}
            href={links.registration.link}
          >
            {links.registration.title}
          </Clickable>
        </div>
      </form>
    </div>
  )
}