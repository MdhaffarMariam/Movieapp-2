import React from 'react'
import {useParams} from 'react-router-dom'
import  './Routing.css'

const Routing = ({movie}) => {
    const Params = useParams();
    const handleMovie = movie.find(el=>el.id===Number(Params.id))
  return (
    <div id = "myPage"className='Routing-page'>
        <h1 className='movietitle'> {handleMovie.title}</h1>
        <iframe width="560" height="315" src ={handleMovie.trailer}/>
        <p> {handleMovie.description}</p>

    </div>
  )
}

export default Routing