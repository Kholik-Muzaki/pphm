// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import artikelReducer from './artikelSlice';
import beritaReducer from './beritaSlice';
import videoReducer from './videoSlice';

export const store = configureStore({
    reducer: {
        artikel: artikelReducer,
        berita: beritaReducer,
        video: videoReducer
    },
});

export default store;
