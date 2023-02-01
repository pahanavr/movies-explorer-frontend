import styles from './MoviesCard.module.css';
import { Clickable } from '../../ui/Clickable/Clickable';
import { Movie } from '../../../utils/models/movies';
import { moviesApiUrl } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { useLocation } from 'react-router';

type Props = {
  movie: Movie;
  onMovieAction: Function;
  className?: string;
  savedMovies: Movie[],
}

export const MoviesCard = ({
  movie,
  onMovieAction,
  className,
  savedMovies,
}: Props) => {

  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLiked(savedMovies?.some((item: Movie) => item.movieId === movie.id));
  }, [movie.id, savedMovies]);

  const imageUrl = () => {
    if (location.pathname === '/movies') {
      return `${moviesApiUrl}${movie.image.url}`;
    } else {
      return movie.image;
    }
  }

  const convertDuration = (duration: number) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`
  };

  return (
    <article className={cx(styles.card, className)} >
      <a className={styles.card__link} href={movie.trailerLink} target='_blank'>
        <img
          className={styles.card__image}
          src={imageUrl().toString()}
          alt={movie.nameRU}
        />
      </a>
      <div className={styles.card__nameBox}>
        <span className={styles.card__name}>{movie.nameRU || movie.nameEN}</span>
        {location.pathname === '/movies' ?
          <Clickable
            className={cx(styles.card__buttonBody, styles.card__saveButton, isLiked && styles.card__saveButton_type_active)}
            onClick={() => onMovieAction(movie)}
          >
          </Clickable>
          :
          <Clickable
            className={cx(styles.card__buttonBody, styles.card__deleteButton)}
            onClick={() => onMovieAction(movie)}
          >
          </Clickable>
        }
      </div>
      <span className={styles.card__duration}>{convertDuration(movie.duration)}</span>
    </article>
  )
}
