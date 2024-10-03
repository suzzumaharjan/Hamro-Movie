import { createSlice } from "@reduxjs/toolkit"

const initialState={
    movies:[],
    reviews:[],
    
}
const movieDetailSlice = createSlice({
    name: 'moviesdetail',
    initialState:initialState,
    reducers: {
        fetchMovieDetail:(state,actions)=>{
    
            //action.payload get the data which has been dispatch from moviecontent and set in state.movies where movies is empty array define in initial state
            state.movies=actions.payload;
        },
        fetchmovieReview:(state,actions)=>{
        
            state.reviews=actions.payload
        },
    

        saveReview:(state, action) => {
            state.reviews.push(action.payload);
        }
  
    },
  })

  export default movieDetailSlice.reducer;
  export const {fetchMovieDetail,fetchmovieReview,saveReview}=movieDetailSlice.actions;
  //use for useselector
  export const selectMoviesDetail = (state) => state.movie.movies
  export const selectReview = (state) => state.reviews.reviews


