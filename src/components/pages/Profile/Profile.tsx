import { Header } from '../../features/Header/Header';
import { Clickable } from '../../ui/Clickable/Clickable';
import { Input } from '../../ui/Input/Input';
import { buttons, labels } from '../../ui/variables/variables';
import styles from './Profile.module.css';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';

type Props = {
  onSubmit?: any;
  nameInput?: string;
  success?: boolean;
}

export interface FormProfileInputs {
  name: string;
  email: string;
}

export const Profile = ({
  onSubmit,
  nameInput,
  success,
}: Props) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormProfileInputs>({
    criteriaMode: 'all',
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email
    }
  });

  const watchName = watch('name')
  const watchEmail = watch('email')
  const disabledEditButton = (currentUser?.name === watchName && currentUser?.email === watchEmail) ? true : false;

  useEffect(() => {
    setValue('name', currentUser?.name || '')
    setValue('email', currentUser?.email || '')
  }, [currentUser])

  const navigate = useNavigate();

  const onSignOut = () => {
    localStorage.clear();
    navigate('/');
  };

  const nameInputRegister = register('name', {
    required: 'Обязательное поле',
  });

  const emailInputRegister = register('email', {
    required: 'Обязательное поле',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email введен некорректно',
    },
  });

  return (
    <div className={styles.profile}>
      <Header />
      <main className={styles.profile__main}>
        <h2 className={styles.profile__title}>
          {`Привет, ${nameInput}!`}
        </h2>
        <form className={styles.profile__form} onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={styles.profile__formField}>
            <Input
              labelClassName={styles.profile__label}
              className={styles.profile__input}
              name='name'
              registerParams={nameInputRegister}
            >
              <span className={styles.profile__inputName}>{labels.name}</span>
            </Input>
            <Input
              labelClassName={styles.profile__label}
              className={styles.profile__input}
              name='email'
              registerParams={emailInputRegister}
            >
              <span className={styles.profile__inputName}>{labels.email}</span>
            </Input>
          </fieldset>
          <div className={styles.profile__buttons}>
            <Clickable
              type='submit'
              className={cx(styles.profile__button, disabledEditButton && styles.profile__button_type_disabled)}
              disabled={disabledEditButton}
            >
              {buttons.edit}
            </Clickable>
            <Clickable
              className={cx(styles.profile__button, styles.profile__button_type_red)}
              onClick={onSignOut}
            >
              {buttons.logout}
            </Clickable>
            <span className={cx(styles.profile__success, success && styles.profile__success_type_active)}>Данные успешно обновлены!</span>
          </div>
        </form>
      </main>
    </div>
  )
}
