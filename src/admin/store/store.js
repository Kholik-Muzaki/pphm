// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import artikelReducer from './artikelSlice';
import beritaReducer from './beritaSlice';
import videoReducer from './videoSlice';
import keuanganReducer from './keuanganSlice';
import fotoReducer from './fotoSlice';

export const store = configureStore({
    reducer: {
        artikel: artikelReducer,
        berita: beritaReducer,
        video: videoReducer,
        keuangan: keuanganReducer,
        foto: fotoReducer
    },
});

export default store;
