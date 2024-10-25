// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import artikelReducer from './artikelSlice';

export const store = configureStore({
    reducer: {
        artikel: artikelReducer,
    },
});

export default store;
