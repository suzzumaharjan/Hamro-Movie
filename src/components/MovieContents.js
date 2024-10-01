import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieContents = () => {
  const [movieList, setMovieList] = useState([]);
  const [moviecategory, setMoviecategory] = useState("popular");

  function changeList(e) {
    setMoviecategory(e.target.value);
  }
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${moviecategory}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovieList(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    loadMovies();
  }, [moviecategory]);

  return (
    <div className="movie-container max-w-full">
      <section className="content">
        <div className="categories">
          <button className="active">Movies</button>
          <button>TV Shows</button>
        </div>
        <div className="movie-heading d-flex justify-content-between p-5">
          <div>
            <p className="text-xl">{moviecategory}</p>
          </div>
          <div>
            <select onChange={changeList}>
              <option value="popular">Popular</option>
              <option value="now_playing">Now Playing</option>
              <option value="top_rated">Top Rated</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>
        <div className="movies-grid align-middle">
          {movieList?.map((item, index) => {
            return <MovieCard movies={item} key={item.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default MovieContents;
