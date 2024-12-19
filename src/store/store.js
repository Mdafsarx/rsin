import { configureStore } from '@reduxjs/toolkit'
import carouselReducer from '../store/carouselSlice';



const store = configureStore({
    reducer: {
        carousel: carouselReducer
    },
})

export default store