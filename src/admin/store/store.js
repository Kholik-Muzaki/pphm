// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import artikelReducer from './artikelSlice';
import beritaReducer from './beritaSlice';

export const store = configureStore({
    reducer: {
        artikel: artikelReducer,
        berita: beritaReducer,
    },
});

export default store;
