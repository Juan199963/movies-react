import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css"
import {useQuery} from "../hooks/useQuery.jsx"

export function MovieDetails(){
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    const query = useQuery();
    const search = query.get("search"); 
    // console.log(movieId);


    

    useEffect(() =>{
        setIsLoading(true);
        get("/movie/" + movieId).then((data)=>{
            
            setMovie(data);
            setIsLoading(false);
        })

    }, [movieId]);

    if(isLoading){
        return <Spinner />;
    }

    if(!movie){
        return null;
    }


    const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return <div className={styles.detailsContainer}>
        <img src={imgURL} alt={movie.title} className = {styles.col + " "+ styles.movieImg}/>
        <div className={styles.col + " "+ styles.movieDetails}>
            <p className={styles.firstItem}><strong>Titulo:</strong> {movie.title}</p>
            <p>
                <strong>Generos: </strong>
                {movie.genres.map(genre => genre.name).join(" ")}
            </p>
            <p><strong>Descripcion: </strong>{movie.overview}</p>

        </div>
    </div>
}