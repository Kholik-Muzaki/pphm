// store/artikelSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { artikelData } from '../../user/data';

const artikelSlice = createSlice({
    name: 'artikel',
    initialState: {
        articles: artikelData,
    },
    reducers: {
        addArtikel: (state, action) => {
            state.articles.push(action.payload);
        },
        deleteArtikel: (state, action) => {
            state.articles = state.articles.filter(article => article.id !== action.payload);
        },
        editArtikel: (state, action) => {
            const { id, title, content, author, image } = action.payload;
            const existingArticle = state.articles.find(article => article.id === id);
            if (existingArticle) {
                existingArticle.title = title;
                existingArticle.content = content;
                existingArticle.author = author;
                existingArticle.image = image;
            }
        },
    },
});

export const { addArtikel, deleteArtikel, editArtikel } = artikelSlice.actions;
export default artikelSlice.reducer;
