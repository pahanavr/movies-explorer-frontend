import { useNavigate } from 'react-router-dom';
import { Clickable } from '../../ui/Clickable/Clickable';
import { notFound } from '../../ui/variables/variables';
import styles from './NotFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.notFound}>
      <h2 className={styles.notFound__title}>
        {notFound.error}
      </h2>
      <p className={styles.notFound__subtitle}>
        {notFound.notFound}
      </p>
      <Clickable
        className={styles.notFound__backButton}
        onClick={() => navigate(-1)}
      >
        {notFound.back}
      </Clickable>
    </main>
  )
}
