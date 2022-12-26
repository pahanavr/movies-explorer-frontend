import { useNavigate } from 'react-router-dom';
import { Clickable } from '../../ui/Clickable/Clickable';
import styles from './NotFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <main className={styles.notFound}>
      <h2 className={styles.notFound__title}>
        404
      </h2>
      <p className={styles.notFound__subtitle}>
        Страница не найдена
      </p>
      <Clickable 
        className={styles.notFound__backButton}
        onClick={() => navigate(-1)}
      >
        Назад
      </Clickable>
    </main>
  )
}