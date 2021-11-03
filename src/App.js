import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import('./pages/HomePage.js') /* webpackChunckName: "home-page" */);
const MoviesPage = lazy(() => import('./pages/MoviesPage.js') /* webpackChunckName: "movies-page" */);
const MoviesDetailsPage = lazy(() => import('./pages/MoviesDetailsPage.js') /* webpackChunckName: "moviesDetails-page" */)

function App () {

  return (
      <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
      <Switch> 
        <Route path='/' exact>
          <HomePage/>
        </Route>
        <Route path='/movies' exact>
          <MoviesPage/>
        </Route>
        <Route path='/movies/:movieId'>
          <MoviesDetailsPage/>
        </Route>
        </Switch>
        </Suspense>
      </>
    ) 
  };

export default App;


