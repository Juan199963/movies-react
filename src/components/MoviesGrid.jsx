import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css"
import { Spinner } from "./Spinner";
import {useQuery} from "../hooks/useQuery.jsx"
import InfiniteScroll from "react-infinite-scroll-component";



export function MoviesGrid({ search }){
    // let movies =[];
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPages] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    // const query = useQuery();    

    // const search = query.get("search");
    // console.log(search);
    // const movies = moviesState[0];
    // const setMovies = moviesState[1];

    useEffect(() =>{
        setIsLoading(true);
        const searchUrl = search 
            ? "/search/movie?query=" + search +"&page="+page
            :'/discover/movie?page='+page;
        get(searchUrl)
            .then((data) => {
                setMovies((prevMovies)=> prevMovies.concat(data.results));
                sethasMore(data.page < data.total_pages)
                setIsLoading(false);

            });
    }, [search,page]);
    
    // if(isLoading){
    //     return <Spinner/>;
    // }

    
    return (
    <InfiniteScroll dataLength={movies.length} 
    hasMore={hasMore} 
    next={()=>setPages((prevPage) => prevPage+1)}
    loader={<Spinner/>}>
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>(
                <MovieCard key ={movie.id} movie={movie}/>
            ))}
        </ul>
    </InfiniteScroll>
    );
};