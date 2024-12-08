// store/artikelSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiInstance from '../../api/api';

// asyn thunk get all artikel
export const getArticle = createAsyncThunk(
    'artikel/getArticle',
    async () => {
        const response = await ApiInstance.get('/artikel');
        return response.data.data
    }
)

export const getArtikelById = createAsyncThunk(
    'artikel/getArtikelById',
    async (id) => {
        const response = await ApiInstance.get(`/artikel/${id}`);
        return response.data.data
    }
)

const artikelSlice = createSlice({
    name: 'artikel',
    initialState: {
        articles: [],
        artikelDetail: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all artikel
            .addCase(getArticle.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getArticle.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.articles = action.payload;
            })
            .addCase(getArticle.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // get artikel by id
            .addCase(getArtikelById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getArtikelById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.artikelDetail = action.payload;
            })
            .addCase(getArtikelById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const { addArtikel, deleteArtikel, editArtikel, getAllArticles } = artikelSlice.actions;
export default artikelSlice.reducer;
