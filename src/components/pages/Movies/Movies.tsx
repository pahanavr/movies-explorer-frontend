import { Footer } from '../../features/Footer/Footer';
import { Header } from '../../features/Header/Header';
import { MoviesCardList } from '../../features/MoviesCardList/MoviesCardList';
import { SearchForm } from '../../features/SearchForm/SearchForm';
import styles from './Movies.module.css';

export const Movies = () => {
  return (
    <>
      <Header isLoggedIn />
      <main className={styles.movies}>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  )
}