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

//asyn thunk  get artucle by id
export const getArtikelById = createAsyncThunk(
    'artikel/getArtikelById',
    async (id) => {
        const response = await ApiInstance.get(`/artikel/${id}`);
        return response.data.data
    }
)

// asyn thunk delete artikel
export const deleteArticle = createAsyncThunk(
    "artikel/deleteArticle",
    async (id) => {
        await ApiInstance.delete(`/artikel/${id}`);
        return id
    }
)

// asyn thunk add article
export const addArticle = createAsyncThunk(
    "artikel/addArticle",
    async (articleData) => {
        const response = await ApiInstance.post("/artikel", articleData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data.data;
    }
);

// asyn thunk edit article
export const editArticle = createAsyncThunk(
    "artikel/editArticle",
    async ({ id, articleData }) => {
        const response = await ApiInstance.put(`/artikel/${id}`, articleData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data.data;
    }
);

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
            // delete artikel
            .addCase(deleteArticle.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteArticle.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.articles = state.articles.filter(artikel => artikel.id !== action.payload);
            })
            .addCase(deleteArticle.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // add article
            .addCase(addArticle.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addArticle.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.articles.push(action.payload);
            })
            .addCase(addArticle.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // update artikel
            .addCase(editArticle.pending, (state) => {
                state.status = "loading";
            })
            .addCase(editArticle.fulfilled, (state, action) => {
                state.status = "succeeded";
                const index = state.articles.findIndex((artikel) => artikel.id === action.payload.id);
                if (index !== -1) {
                    state.dataArtikel[index] = action.payload;
                }
                if (state.artikelDetail?.id === action.payload.id) {
                    state.artikelDetail = action.payload;
                }
            })
            .addCase(editArticle.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const { addArtikel, deleteArtikel, editArtikel, getAllArticles } = artikelSlice.actions;
export default artikelSlice.reducer;
