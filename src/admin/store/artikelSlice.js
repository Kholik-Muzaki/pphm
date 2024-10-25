// store/artikelSlice.js
import { createSlice } from '@reduxjs/toolkit';

const artikelSlice = createSlice({
    name: 'artikel',
    initialState: {
        articles: [],
    },
    reducers: {
        addArtikel: (state, action) => {
            state.articles.push(action.payload);
        },
    },
});

export const { addArtikel } = artikelSlice.actions;
export default artikelSlice.reducer;
