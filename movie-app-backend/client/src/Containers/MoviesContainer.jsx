import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from "../Actions/movie";
import MovieCard from "../Components/MovieCard";

function MoviesContainer() {

    const dispatch = useDispatch()

    const {movies} = useSelector(({moviesReducer}) => {
        const {movies} = moviesReducer
        return{
            movies
        }
    })

    useEffect(() => {
        fetchMovies(dispatch)
    }, [dispatch])

    return(
        <div>
            <h1>Movies</h1>
            {movies.map(movie => <MovieCard movie={movie} />)}
        </div>
    )
}

export default MoviesContainer;