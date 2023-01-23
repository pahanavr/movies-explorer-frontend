import { Movie } from '../../../utils/models/movies';
import { Footer } from '../../features/Footer/Footer';
import { Header } from '../../features/Header/Header';
import { MoviesCardList } from '../../features/MoviesCardList/MoviesCardList';
import { SearchForm } from '../../features/SearchForm/SearchForm';
import styles from './SavedMovies.module.css';

type Props = {
  onMovieDelete?: Function;
  movies: Movie[];
  onSearch?: Function;
  notFoundMovies?: boolean;
  onSubmit?: any;
  onChangeCheckboxValue: () => void;
  shortMovie?: boolean;
  preloader?: boolean;
}

export const SavedMovies = ({
  onMovieDelete,
  movies,
  onSearch,
  notFoundMovies,
  onSubmit,
  onChangeCheckboxValue,
  shortMovie,
  preloader,
}: Props) => {

  return (
    <>
      <Header />
      <main className={styles.savedMovies}>
        <SearchForm
          onChangeCheckboxValue={onChangeCheckboxValue}
          onSearch={onSearch}
          onSubmit={onSubmit}
          shortMovie={shortMovie}
        />
        <MoviesCardList
          movies={movies}
          onMovieAction={onMovieDelete}
          notFoundMovies={notFoundMovies}
          preloader={preloader}
        />
      </main>
      <Footer />
    </>
  )
}