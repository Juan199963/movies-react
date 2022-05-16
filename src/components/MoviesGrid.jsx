import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css"

export function MoviesGrid(){
    // let movies =[];
    const [movies, setMovies] = useState([]);
    
    // const movies = moviesState[0];
    // const setMovies = moviesState[1];

    useEffect(() =>{
        get('/discover/movie')
            .then((data) => {
                setMovies(data.results);

            });
    }, []); 
    return (
    <ul className={styles.moviesGrid}>
        {movies.map((movie) =>(
            <MovieCard key ={movie.id} movie={movie}/>
        ))}
    </ul>
    );
};