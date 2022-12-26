import styles from './MoviesCard.module.css';
import saveIcon from '../../../images/save_icon.svg';
import { Clickable } from '../../ui/Clickable/Clickable';

type Props = {
  image: string;
  nameRU: string;
  duration: string;
}

export const MoviesCard = ({
  image,
  nameRU,
  duration,
}: Props) => {
  return (
    <article className={styles.card}>
      <img className={styles.card__image} src={image} alt={nameRU} />
      <div className={styles.card__nameBox}>
        <span className={styles.card__name}>{nameRU}</span>
        <Clickable className={styles.card__saveBox}>
          <img className={styles.card__saveIcon} src={saveIcon} alt='saveIcon' />
        </Clickable>
      </div>
      <span className={styles.card__duration}>{duration}</span>
    </article>
  )
}