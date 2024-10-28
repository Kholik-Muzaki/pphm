// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import artikelReducer from './artikelSlice';
import beritaReducer from './beritaSlice';
import videoReducer from './videoSlice';
import keuanganReducer from './keuanganSlice';

export const store = configureStore({
    reducer: {
        artikel: artikelReducer,
        berita: beritaReducer,
        video: videoReducer,
        keuangan: keuanganReducer
    },
});

export default store;
