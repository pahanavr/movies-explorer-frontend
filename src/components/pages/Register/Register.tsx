import { Clickable } from '../../ui/Clickable/Clickable';
import { useForm } from 'react-hook-form';
import { Input } from '../../ui/Input/Input';
import { buttons, labels, links } from '../../ui/variables/variables';
import { Logo } from '../../ui/Logo/Logo';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import cx from 'classnames';

export interface FormRegisterInputs {
  nameInput?: string;
  emailInput: string;
  passwordInput: string;
}

export type Register = {
  name?: string | undefined;
  email: string;
  password: string;
}

type Props = {
  onRegister?: any;
  sameEmailError?: boolean;
}

export const Register = ({
  onRegister,
  sameEmailError
}: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      navigate('/profile');
    }
  }, []);

  const {
    register,
    handleSubmit,
  } = useForm<FormRegisterInputs>({
    criteriaMode: 'all',
  });

  const nameInput = register('nameInput', {})

  const emailInput = register('emailInput', {
    required: 'Обязательное поле',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email введен некорректно',
    },
  });

  const passwordInput = register('passwordInput', {
    required: 'Обязательно поле',
  });

  return (
    <div className={styles.register}>
      <header className={styles.register__header}>
        <Logo className={styles.register__headerLogo} />
        <h2 className={styles.register__title}>Добро пожаловать!</h2>
      </header>
      <main className={styles.register__}>
        <form className={styles.register__form} onSubmit={handleSubmit(onRegister)}>
          <Input
            labelClassName={styles.register__label}
            className={styles.register__input}
            type='text'
            name='name'
            label={labels.name}
            registerParams={nameInput}
          />
          <Input
            labelClassName={styles.register__label}
            className={styles.register__input}
            type='email'
            name='email'
            label={labels.email}
            required={true}
            registerParams={emailInput}
          />
          <Input
            labelClassName={styles.register__label}
            className={styles.register__input}
            type='password'
            name='password'
            label={labels.password}
            required={true}
            registerParams={passwordInput}
          />
          <span className={cx(styles.register__sameEmail, sameEmailError && styles.register__sameEmail_type_active)}>
            Произошла ошибка, попробуйте еще раз.
          </span>
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