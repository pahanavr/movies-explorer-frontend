import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Clickable } from '../../ui/Clickable/Clickable';
import { Input } from '../../ui/Input/Input';
import { Logo } from '../../ui/Logo/Logo';
import { buttons, labels, links } from '../../ui/variables/variables';
import styles from './Login.module.css';
import * as authApi from '../../../utils/AuthApi';

interface FormInputs {
  emailInput: string;
  passwordInput: string;
}

type Login = {
  email: string;
  password: string;
  token?: string;
}

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm<FormInputs>({
    criteriaMode: 'all',
  });

  const onSubmit = async (data: FormInputs) => {
    const body = {
      email: data.emailInput,
      password: data.passwordInput,
    } as Login;

    return authApi.authorize(body.email, body.password)
      .then((res: Login) => {
        if (!res) throw new Error('Неправильные имя пользователя или пароль');
        if (res) {
          localStorage.setItem('jwt', res.token!);
          localStorage.setItem('searchedMovies', JSON.stringify([]));
          localStorage.setItem('searchValue', '')
          navigate('/movies')
        }
      }).catch((error: any) => console.log(error));
  }

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
    <section className={styles.login}>
      <header className={styles.login__header}>
        <Logo className={styles.login__headerLogo} />
        <h2 className={styles.login__title}>Рады видеть!</h2>
      </header>
      <main className={styles.login__main}>
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelClassName={styles.login__label}
            className={styles.login__input}
            type='email'
            name='email'
            label={labels.email}
            required={true}
            registerParams={emailInput}
          />
          <Input
            labelClassName={styles.login__label}
            className={styles.login__input}
            type='password'
            name='password'
            label={labels.password}
            required={true}
            registerParams={passwordInput}
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
      </main>
    </section>
  )
}
