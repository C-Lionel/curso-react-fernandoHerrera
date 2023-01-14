import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter'

export const store = configureStore({
    reducer: {
        conter: counterSlice.reducer
    }
})