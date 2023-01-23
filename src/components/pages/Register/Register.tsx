import { Clickable } from '../../ui/Clickable/Clickable';
import { useForm } from 'react-hook-form';
import { Input } from '../../ui/Input/Input';
import { buttons, labels, links } from '../../ui/variables/variables';
import { Logo } from '../../ui/Logo/Logo';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import * as authApi from '../../../utils/AuthApi';
import mainApi from '../../../utils/MainApi';
import { useEffect } from 'react';

interface FormInputs {
  nameInput?: string;
  emailInput: string;
  passwordInput: string;
}

type Register = {
  name?: string | undefined;
  email: string;
  password: string;
}

export const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      navigate('/profile');
    }
  }, []);

  const {
    register,
    handleSubmit,
  } = useForm<FormInputs>({
    criteriaMode: 'all',
  });

  const onSubmit = (data: FormInputs) => {
    const body = {
      name: data.nameInput,
      email: data.emailInput,
      password: data.passwordInput,
    } as Register;

    return authApi.register(body)
      .then((res) => {
        if (res) {
          mainApi.getProfileInfo()
          navigate('/users/me')
        }
        if (!res) {
          throw new Error('Что-то пошло не так');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
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