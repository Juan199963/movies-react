import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css"

export function MovieDetails(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    console.log(movieId);


    useEffect(() =>{
        get("/movie/" + movieId).then((data)=>{
            setMovie(data);
        })

    }, [movieId]);

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