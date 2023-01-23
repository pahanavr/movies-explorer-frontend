import { useEffect, useState } from 'react';
import { Movie } from '../../../utils/models/movies';
import { Clickable } from '../../ui/Clickable/Clickable';
import { buttons } from '../../ui/variables/variables';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import styles from './MoviesCardList.module.css';
import cx from 'classnames';
import { Preloader } from '../Preloader/Preloader';

type Props = {
  onMovieAction: any;
  movies: Movie[];
  notFoundMovies?: boolean;
  savedMovies?: any;
  preloader?: boolean;
}

export const MoviesCardList = ({
  onMovieAction,
  movies,
  notFoundMovies,
  savedMovies,
  preloader,
}: Props) => {

  const [showedMovies, setShowedMovies] = useState<number>(0);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    numberShowedMovies();
    window.addEventListener('resize', numberShowedMovies);
  }, [])

  const changeShowedMovies = () => {
    if (windowWidth >= 1280) {
      setShowedMovies(showedMovies + 3);
    }
    if (windowWidth < 1280 && windowWidth >= 768) {
      setShowedMovies(showedMovies + 2);
    }
    if (windowWidth < 768 && windowWidth >= 320) {
      setShowedMovies(showedMovies + 1);
    }
  }

  const numberShowedMovies = () => {
    if (windowWidth > 1280) {
      setShowedMovies(12);
    }
    if (windowWidth < 1280 && windowWidth >= 768) {
      setShowedMovies(8);
    }
    if (windowWidth < 768 && windowWidth >= 320) {
      setShowedMovies(5);
    }
  }

  return (
    <section className={styles.cardList}>
      {preloader ? <Preloader /> : (notFoundMovies ?
        <>
          <div className={styles.cardList__grid}>
            {movies?.slice(0, showedMovies)?.map(movie => (
              <MoviesCard
                className={cx(styles.cardList__card)}
                onMovieAction={onMovieAction}
                movie={movie}
                key={movie.id || movie.movieId}
                savedMovies={savedMovies}
              />
            ))}
          </div>
          {!(movies?.length! <= showedMovies) ?
            <Clickable
              className={styles.cardList__stillButton}
              onClick={changeShowedMovies}
            >
              {buttons.still}
            </Clickable>
            : null
          }
        </>
        :
        <span className={styles.cardList__notFoundMovies}>
          Ничего не найдено
        </span>
      )}
    </section>
  )
}
