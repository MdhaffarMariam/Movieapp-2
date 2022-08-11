import React from 'react'
import MovieList from "../movielist/MovieList"

const MovieCard = ({movie}) => {
  return (
    <div className='container-fluid'>{movie.map( el => <MovieList movie={el} key={el.id}/>)}</div>
  )
}

export default MovieCard