import React from 'react';
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
import { Profile } from '../pages/Profile/Profile';
import { Movies } from '../pages/Movies/Movies';

function App() {
  return (
    <div className={styles.page}>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
