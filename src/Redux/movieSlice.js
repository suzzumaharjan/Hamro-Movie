import { createSlice } from "@reduxjs/toolkit"

const initialState={
    movies:[]
}
const movieSlice = createSlice({
    name: 'movies',
    initialState:initialState,
    reducers: {
        fetchMovie:(state,actions)=>{
    
            //action.payload get the data which has been dispatch from moviecontent and set in state.movies where movies is empty array define in initial state
            state.movies=actions.payload
        }
        
  
    },
  })

  export default movieSlice.reducer;
  export const {fetchMovie}=movieSlice.actions;
  //use for useselector
  export const selectMovies = (state) => state.movies.movies
  export const selectMovieById = (state, movieId) => state.movies.movies.find((movie) => movie.id === parseInt(movieId));