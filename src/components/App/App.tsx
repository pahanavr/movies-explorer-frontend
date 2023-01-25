import { Main } from '../pages/Main/Main';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { NotFound } from '../pages/NotFound/NotFound';
import { FormProfileInputs, Profile } from '../pages/Profile/Profile';
import { Movies } from '../pages/Movies/Movies';
import { SavedMovies } from '../pages/SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ChangeEvent, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import { Movie } from '../../utils/models/movies';
import moviesApi from '../../utils/MoviesApi';
import { User } from '../../utils/models/users';

function App() {
  const [savedMovies, setSavedMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [filteredSavedMovies, setFilteredSavedMovies] = useState<Movie[]>([])
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchedSavedInput, setSearchedSavedInput] = useState<string>('');
  const [preloader, setPreloader] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>();
  const [success, setSuccess] = useState<boolean>(false)
  const [showShortMovies, setShowShortMovies] = useState<boolean>(false)
  const [showShortSavedMovies, setShowShortSavedMovies] = useState<boolean>(false)

  const token = localStorage.getItem('jwt');
  const searchedMoviesFromStorage = JSON.parse(localStorage.getItem('searchedMovies')!);
  const searchValueFromStorage = localStorage.getItem('searchValue');

  //get profile info
  useEffect(() => {
    if (token)
      mainApi
        .getProfileInfo()
        .then((res) => {
          console.log(res)
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
  }, [token]);

  //get movies from api
  useEffect(() => {
    if (token)
      moviesApi
        .getMovies()
        .then((res) => {
          setPreloader(true);
          setMovies(res);
          setFilteredMovies(searchedMoviesFromStorage);
          localStorage.setItem('movies', JSON.stringify(res));
          if (localStorage.getItem('isShort') === 'true') {
            setShowShortMovies(true);
          } else {
            setShowShortMovies(false);
          }
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => setPreloader(false));
  }, [token]);

  //get saved movies
  useEffect(() => {
    if (token)
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem('savedMovies', JSON.stringify(res));
          setFilteredSavedMovies(JSON.parse(localStorage.getItem('savedMovies')!))
        })
        .catch((err) => {
          console.log(err);
        });
  }, [token]);

  //update user info
  const handeUpdateUser = (data: FormProfileInputs) => {
    return mainApi.updateProfile(data)
      .then((res) => {
        setCurrentUser(res);
        setSuccess(true)
      })
      .catch((err: any) => console.log(err))
      .finally(() => setTimeout(() => setSuccess(false), 3000))
  }

  // actions for movie (save and delete)
  const handleDeleteMovie = (movie: Movie) => {
    mainApi.deleteMovie(movie._id!)
      .then(() => {
        const filtereSavedMoviesAfterDelete = savedMovies.filter((c: any) => c._id !== movie._id!);
        localStorage.setItem('savedMovies', JSON.stringify(filtereSavedMoviesAfterDelete));
        setSavedMovies(filtereSavedMoviesAfterDelete);
        setFilteredSavedMovies(filtereSavedMoviesAfterDelete);
      }).catch((err: any) => console.log(err))
  }

  const handleSaveMovie = (movie: Movie) => {
    const savedMovie = savedMovies.find((item) => item.movieId === movie.id)!;
    if (!savedMovies.includes(savedMovie!)) {
      return mainApi.addMovie(movie)
        .then((movieReq: Movie) => {
          if (!savedMovie) {
            const savedMovieList = ([...savedMovies, movieReq]);
            setSavedMovies(savedMovieList)
            setFilteredSavedMovies(savedMovieList)
            localStorage.setItem('savedMovies', JSON.stringify(savedMovieList));
          }
        }).catch((err: any) => console.log(err));
    }
    else {
      return handleDeleteMovie(savedMovie);
    }
  }

  //search block
  const searchedMovies = movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchInput.toLowerCase())
  })
  const searchedSavedMovies = savedMovies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchedSavedInput.toLowerCase())
  })

  //search movies
  const handleChangeSearchMovies = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    localStorage.setItem('searchValue', e.target.value)
  }

  const handleChangeSearchSavedMovies = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedSavedInput(e.target.value);
  }

  const handleSearchMovies = (e: any) => {
    e.preventDefault();
    setPreloader(true);
    if (searchValueFromStorage !== ('' || undefined || null)) {
      setFilteredMovies(searchedMovies);
      localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies));
    }
    else {
      setFilteredMovies(filteredMovies);
    }
    setTimeout(() => setPreloader(false), 300);
  }

  const handleSearchSavedMovies = (e: any) => {
    e.preventDefault();
    setPreloader(true);
    if (searchedSavedInput !== '' || undefined) {
      setFilteredSavedMovies(searchedSavedMovies);
    } else {
      setFilteredSavedMovies(savedMovies);
    }
    setTimeout(() => setPreloader(false), 300)
  }

  //filterCheckbox
  const handleShowShortMovies = () => {
    setShowShortMovies(!showShortMovies);
    localStorage.setItem('isShort', JSON.stringify(!showShortMovies));
  }

  const handleShowShortSavedMovies = () => {
    setShowShortSavedMovies(!showShortSavedMovies);
  }

  const shortMovies = (movies: Movie[]) => {
    return movies?.filter(movie => movie.duration <= 40);
  }

  const shortFilteredMovies = shortMovies(filteredMovies);
  const shortFilteredSavedMovies = shortMovies(filteredSavedMovies);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={styles.page}>
        <Router>
          <Routes>
            <Route path='/' element={
              <Main />
            }
            />
            <Route path='/signup' element={
              <ProtectedRoute isLoggedIn={true}>
                <Register />
              </ProtectedRoute>
            }
            />
            <Route path='/signin' element={
              <ProtectedRoute isLoggedIn={true}>
                <Login />
              </ProtectedRoute>} />
            <Route path='/users/me' element={
              <ProtectedRoute>
                <Profile
                  onSubmit={handeUpdateUser}
                  nameInput={currentUser?.name}
                  success={success}
                />
              </ProtectedRoute>
            }
            />
            <Route path='/movies' element={
              <ProtectedRoute>
                <Movies
                  onSubmit={handleSearchMovies}
                  onSearch={handleChangeSearchMovies}
                  onChangeCheckboxValue={handleShowShortMovies}
                  movies={showShortMovies ? shortFilteredMovies : filteredMovies}
                  onMovieSave={handleSaveMovie}
                  notFoundMovies={(filteredMovies?.length !== 0)}
                  savedMovies={savedMovies}
                  shortMovie={showShortMovies}
                  preloader={preloader}
                  defaultValue={searchValueFromStorage?.toString()}
                />
              </ProtectedRoute>
            }
            />
            <Route path='/saved-movies' element={
              <ProtectedRoute>
                <SavedMovies
                  onSubmit={handleSearchSavedMovies}
                  onSearch={handleChangeSearchSavedMovies}
                  onChangeCheckboxValue={handleShowShortSavedMovies}
                  movies={showShortSavedMovies ? shortFilteredSavedMovies : filteredSavedMovies}
                  onMovieDelete={handleDeleteMovie}
                  notFoundMovies={filteredSavedMovies.length !== 0}
                  shortMovie={showShortSavedMovies}
                  preloader={preloader}
                />
              </ProtectedRoute>
            }
            />
            <Route path='*' element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            }
            />
          </Routes>
        </Router>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
