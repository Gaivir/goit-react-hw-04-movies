import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import AppBar from './Components/AppBar/AppBar';
import { Suspense, lazy } from "react";

const HomePage = lazy(() =>
  import('./views/HomePage.jsx' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.jsx' /* webpackChunkName: "movies-page" */));
const PageDetalisView = lazy(() =>
  import('./views/PageDetalisView.jsx' /* webpackChunkName: "page-detalis-view" */));


const App=()=>   {
  
     return (
       <>
         <AppBar />
      
         <Suspense fallback={<h1>Загружаем...</h1>}>
           <Switch>
        <Route exact path={routes.home} component={HomePage} />
           <Route path={routes.movieId} component={PageDetalisView} />
           <Route path={routes.movies} component={MoviesPage} />
        <Route component={routes.home} />
      </Switch>
         </Suspense>
      
      
    </>
  );
}

export default App