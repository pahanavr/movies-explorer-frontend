import { Clickable } from '../../ui/Clickable/Clickable';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import styles from './MoviesCardList.module.css';

//хардкод, чтобы показать корректность верстки
const movies = {
  first: {
    image: 'https://www.film.ru/sites/default/files/images/hfn4.jpg',
    nameRU: 'Брат 2',
    duration: '1ч50м'
  },
  second: {
    image: 'https://www.film.ru/sites/default/files/images/hfn4.jpg',
    nameRU: 'Брат 2',
    duration: '1ч50м'
  },
  third: {
    image: 'https://www.film.ru/sites/default/files/images/hfn4.jpg',
    nameRU: 'Брат 2',
    duration: '1ч50м'
  },
  fourth: {
    image: 'https://www.film.ru/sites/default/files/images/hfn4.jpg',
    nameRU: 'Брат 2',
    duration: '1ч50м'
  },
  fifth: {
    image: 'https://www.film.ru/sites/default/files/images/hfn4.jpg',
    nameRU: 'Брат 2',
    duration: '1ч50м'
  },
  sixth: {
    image: 'https://www.film.ru/sites/default/files/images/hfn4.jpg',
    nameRU: 'Брат 2',
    duration: '1ч50м'
  }
}

export const MoviesCardList = () => {
  return (
    <section className={styles.cardList}>
      <div className={styles.cardList__grid}>
        {Object.values(movies).map(movie => (
          <MoviesCard
            image={movie.image}
            nameRU={movie.nameRU}
            duration={movie.duration}
          />
        )
        )}
      </div>
      <Clickable
        className={styles.cardList__stillButton}
      >
        Еще
      </Clickable>
    </section>
  )
}