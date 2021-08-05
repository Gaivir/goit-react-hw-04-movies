import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import style from './App.module.css';
// import getApi from './services/get-api';

const App = () => (
  <>
    <ul>
      <li><NavLink exact to="/" className={style.navLink} activeClassName={style.navLinkActiv}>Home</NavLink></li>
      <li><NavLink exact to ="/movies" className={style.navLink} activeClassName = {style.navLinkActiv}>Movies</NavLink></li>
    </ul>


    <Switch>
      <Route exact path='/' component={HomeView} />
      <Route exact path='/movies' component={MoviesPage} />
      <Route exact path='/movies/:movieId' component={MovieDetailsPage} />
    <Route component={NotFoundView} />
    </Switch>
  
  </>
);


export default App;
