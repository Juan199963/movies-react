import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";

import styles from "./MovieDetails.module.css"


export function MovieDetails(){
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);



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


    const imgURL = movie.poster_path 
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path 
    : "https://st2.depositphotos.com/1020091/48323/v/600/depositphotos_483239438-stock-illustration-icon-of-photo-film-drying.jpg";
    return <div className={styles.detailsContainer}>
        <img src={imgURL} alt={movie.title} className = {styles.col + " "+ styles.movieImg}/>
        <div className={styles.col + " "+ styles.movieDetails}>
            <p className={styles.firstItem}><strong>Titulo:</strong> {movie.title}</p>
            <p>
                <strong>Generos: </strong>
                {movie.genres.map(genre => genre.name).join(" ")}
            </p>
            <p><strong>Descripcion: </strong>{movie.overview}</p>
            <p><strong>Fecha de Lanzamiento: </strong>{movie.release_date}</p>

        </div>
    </div>
}