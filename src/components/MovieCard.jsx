import { Link } from "react-router-dom"
import styles from "./MovieCard.module.css"


export function MovieCard({movie}){
    console.log(styles)
    const imgURL = movie.poster_path 
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path 
    : "https://st2.depositphotos.com/1020091/48323/v/600/depositphotos_483239438-stock-illustration-icon-of-photo-film-drying.jpg";
    return <li key={movie.id} className={styles.movieCard}>
            <Link to={"/movie/"+ movie.id}>
                <img 
                    width = {230} 
                    height ={345} 
                    src={imgURL} 
                    alt = {movie.title} 
                    className={styles.movieImage}
                />
                <div className={styles.text}>{movie.title}</div>
                <div className={styles.text}>{movie.popularity}</div>
            </Link>
        </li>
}