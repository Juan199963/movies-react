import { MoviesGrid } from "./components/MoviesGrid.jsx";
import styles from "./App.module.css"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { LandingPage } from "./pages/landingPage.jsx";

export function App(){
    return <Router>
        <header>
            <Link to ="/">
            <h1 className={styles.title}>
                Peliculas
            </h1>
            </Link>
            <Link to = "/">Home</Link>
            <Link to = "/movie">Movie</Link>
        </header>
        <main>
            <Switch>
                <Route exact path="/movie/:movieId"><MovieDetails/></Route>
                <Route path="/"><LandingPage/></Route>
        
            </Switch>
        </main>
    </Router>;
}