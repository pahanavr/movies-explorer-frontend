import { Footer } from '../../features/Footer/Footer';
import { Header } from '../../features/Header/Header';
import { MoviesCardList } from '../../features/MoviesCardList/MoviesCardList';
import { SearchForm } from '../../features/SearchForm/SearchForm';
import styles from './SavedMovies.module.css';

export const SavedMovies = () => {
  return (
    <main className={styles.savedMovies}>
      <Header isLoggedIn />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  )
}