import { Movie } from '../../../utils/models/movies';
import { Footer } from '../../features/Footer/Footer';
import { Header } from '../../features/Header/Header';
import { MoviesCardList } from '../../features/MoviesCardList/MoviesCardList';
import { SearchForm } from '../../features/SearchForm/SearchForm';
import styles from './Movies.module.css';

type Props = {
  onMovieSave?: Function;
  movies: Movie[];
  onChangeCheckboxValue?: () => void;
  onSearch?: Function;
  notFoundMovies?: boolean;
  savedMovies?: Movie[];
  shortMovie?: boolean;
  onSubmit?: Function;
  preloader?: boolean;
  notFoundSavedMovies?: boolean;
  defaultValue?: string;
  firstLoad?: boolean;
}

export const Movies = ({
  onMovieSave,
  movies,
  onChangeCheckboxValue,
  onSearch,
  notFoundMovies,
  savedMovies,
  shortMovie,
  onSubmit,
  preloader,
  defaultValue,
  firstLoad,
}: Props) => {

  return (
    <>
      <Header />
      <main className={styles.movies}>
        <SearchForm
          onChangeCheckboxValue={onChangeCheckboxValue}
          onSearch={onSearch}
          shortMovie={shortMovie}
          onSubmit={onSubmit}
          defaultValue={defaultValue}
        />
        <MoviesCardList
          onMovieAction={onMovieSave}
          movies={movies}
          notFoundMovies={notFoundMovies}
          savedMovies={savedMovies}
          preloader={preloader}
          firstLoad={firstLoad}
        />
      </main>
      <Footer />
    </>
  )
}