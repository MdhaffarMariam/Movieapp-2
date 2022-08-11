import React from 'react'
import MovieList from '../movielist/MovieList'
import Rating from '../rating/Rating'

const Filter = ({text , rating , handleRating , handleSubmit}) => {
  return (
    <div>
        <h1> My movie app</h1>
    <input type = 'text' onChange={handleSubmit}  placeholder='Search...' value={text}/>
   <Rating rating={rating} handleRating={handleRating}/>
   {/* {movie.filter(el =><MovieList/> (el.title.toLowerCase().includes(text.toLowerCase()))&& el.rating>= rating)} */}
  
   </div>
  
  )}

export default Filter