import { Link } from "react-router-dom"
import styles from "./MovieCard.module.css"

export function MovieCard({movie}){
    console.log(styles)
    const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return <li key={movie.id} className={styles.movieCard}>
            <Link to={"/movie/"+ movie.id}>
                <img 
                    width = {230} 
                    height ={345} 
                    src={imgURL} 
                    alt = {movie.title} 
                    className={styles.movieImage}
                />
                <div>{movie.title}</div>
            </Link>
        </li>
}