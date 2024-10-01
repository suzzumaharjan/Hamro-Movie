import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movies}) => {
  const navigate=useNavigate();
  function navigateDetail()
  {
    navigate(`/moviedetail/${movies.id}`)
  }

  return (
    <div>
      
      <div className="movie" onClick={navigateDetail}>
      <img className='movie-image'src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`} alt=""/>
                    <p className='movie-name'>{movies.original_title}</p>
                </div>
    </div>
  )
}

export default MovieCard
