import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice'
import movieDetailReducer from './movieDetailSlice'
import movieReviewReducer from './movieDetailSlice'
const store=configureStore({
    reducer:{
        movies: movieReducer,
        movie:movieDetailReducer,
        reviews:movieReviewReducer
       
    }
})
export default store;