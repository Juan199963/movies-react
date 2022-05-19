
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
                PELICULAS
            </h1>
            </Link>
            {/* <Link to = "/">Home</Link>
            <Link to = "/movie">Movie</Link> */}
        </header>
        <main className={styles.container}>
            <Switch>
                <Route exact path="/movie/:movieId"><MovieDetails/></Route>
                <Route path="/"><LandingPage/></Route>
        
            </Switch>
        </main>
    </Router>;
}