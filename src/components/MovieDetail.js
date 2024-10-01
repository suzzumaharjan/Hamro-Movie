import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const options = { method: "GET", headers: { accept: "application/json" } };
const MovieDetail = () => {
  let { id } = useParams();
  const [moviedetail, setMovieDetail] = useState([]);
  const backgroundImage = `https://image.tmdb.org/t/p/w200${moviedetail.poster_path}`;
  useEffect(() => {
    const loadMovies = async () => {
      
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    loadMovies();
    ReviewData();
  }, [id]);
  const ReviewData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await response.json();
    
  };

  return (
    <div
      className=""
      style={{
      backgroundColor:"#212529",
        color:"white"
      }}
    >
      
      <div className="movie-container p-4 ">
        <div className="d-flex justify-content-center">
          <img
            className="movie-info-image mx-auto"
            src={`https://image.tmdb.org/t/p/w200${moviedetail.poster_path}`}
            alt=""
          />
        </div>
        <div className="movie-Info-content p-4" style={{border:"1px solid black"}}>
          <h1 className="movie-title"><strong>{moviedetail.title}</strong></h1>
          <p className="movie-overview py-2">{moviedetail.overview}</p>
          <p className="movie-date"><strong>Released Date:</strong>{moviedetail.release_date}</p>
          <p className="movie-genre"><strong>Genre:</strong>
          {
            moviedetail.genres?.map((genre,index)=>(
                <span>{genre.name}{index<moviedetail.genres.length-1?" , ":""}</span>
            )   

            )
          }
          </p>
        
        </div>
      </div>
      <div className="review-container">
        <div>
          <h1>Review</h1>
        </div>

      </div>
    </div>
  );
};

export default MovieDetail;
