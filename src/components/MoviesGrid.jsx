import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css"
import { Spinner } from "./Spinner";
import {useQuery} from "../hooks/useQuery.jsx"



export function MoviesGrid(){
    // let movies =[];
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const query = useQuery();    

    const search = query.get("search");
    console.log(search);
    // const movies = moviesState[0];
    // const setMovies = moviesState[1];

    useEffect(() =>{
        setIsLoading(true);
        const searchUrl = search 
            ? "/search/movie?query=" + search 
            :'/discover/movie';
        get(searchUrl)
            .then((data) => {
                setMovies(data.results);
                setIsLoading(false);

            });
    }, [search]);
    
    if(isLoading){
        return <Spinner/>;
    }

    
    return (
    <ul className={styles.moviesGrid}>
        {movies.map((movie) =>(
            <MovieCard key ={movie.id} movie={movie}/>
        ))}
    </ul>
    );
};