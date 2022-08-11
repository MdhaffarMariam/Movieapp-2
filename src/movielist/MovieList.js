import React from 'react'
import './MovieList.css'
import {Link} from 'react-router-dom'
const MovieList = ({movie}) => {
  return (
    <div className='carte'>
        <h1>{movie.title}</h1>
        <img src={movie.posterURL}  alt='movie'/>
        <h2>{movie.rating}</h2>
        <Link to ={`/Routing/${movie.id}`}> Watch trailer </Link>
    </div>
  )
}

export default MovieList