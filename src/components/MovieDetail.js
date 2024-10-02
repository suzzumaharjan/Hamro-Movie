import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectMoviesDetail, selectReview } from "../Redux/movieDetailSlice";
import { fetchMovieDetail, fetchmovieReview } from "../Redux/movieDetailSlice";

const option = { method: "GET", headers: { accept: "application/json" } };
const MovieDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const moviedetail = useSelector(selectMoviesDetail);
  const reviewsdata = useSelector(selectReview);
  // const [moviedetail, setMovieDetail] = useState([]);
  // const [reviewsdata, setReviewData] = useState([]);
 

  //this code is to filter the id using selector
  // const moviedetail = useSelector((state) => selectMovieById(state, id));
  // const backgroundImage = `https://image.tmdb.org/t/p/w200${moviedetail.poster_path}`;

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`,
          option
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        // setMovieDetail(data);
        dispatch(fetchMovieDetail(data));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    loadMovies();
    ReviewData();
  
  }, [dispatch, id]);

  // const moviedetail=useSelector((state)=>getMovieById(state,id));
  //review fetch part
  const ReviewData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    // setReviewData(data.results);
    dispatch(fetchmovieReview(data.results));
  };
 
  const postRating = useCallback( async() => {
    let ratingvalue=document.getElementById('ratingvalue').value;
    
  console.log(ratingvalue);
  
    
    const response =await fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${process.env.REACT_APP_BEARER_KEY}`,
        },
       
        body: `{"value":${ratingvalue}}`,
      }
    );
    const data =await response.json();
    console.log(data);
    
  });

  return (
    <div
      className=""
      style={{
        backgroundColor: "#212529",
        color: "white",
      }}
    >
      <div className="movie-container p-4 ">
        <div className="d-flex justify-content-center">
          <img
            className="movie-info-image mx-auto"
            src={`https://image.tmdb.org/t/p/w200${moviedetail?.poster_path}`}
            alt=""
          />
        </div>
        <div className="movie-Info-content p-4">
          <h1 className="movie-title">
            <strong>{moviedetail?.title}</strong>
          </h1>
          <p className="movie-overview py-2">{moviedetail?.overview}</p>
          <p className="movie-date">
            <strong>Released Date:</strong>
            {moviedetail?.release_date}
          </p>
          <p className="movie-genre">
            <strong>Genre:</strong>
            {moviedetail?.genres?.map((genre, index) => (
              <span>
                {genre.name}
                {index < moviedetail?.genres.length - 1 ? " , " : ""}
              </span>
            ))}
          </p>
          <div className="d-flex">
            <div>
              <span>Rating:</span>
              <select id="ratingvalue">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <button className="bg-primary" onClick={postRating}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="review-container p-4">
        <div>
          <h1>Review</h1>
        </div>

        {reviewsdata?.map((reviewlist) => (
          <div className="card review-content my-3">
            <div className="d-flex">
              <div>
                <img
                  className="author-img"
                  src={`https://media.themoviedb.org/t/p/w45_and_h45_face/${reviewlist.author_details.avatar_path}`}
                  alt=""
                />
              </div>
              <div>
                <p className="p-2 mx-3">
                  <strong>{reviewlist.author_details.name}</strong>
                </p>
              </div>
            </div>
            <div>
              <p className="author-content px-4">{reviewlist.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
