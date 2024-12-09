import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiInstance from "../../api/api";

// asyn thun get all berita
export const getBerita = createAsyncThunk(
    "berita/getBerita",
    async () => {
        const response = await ApiInstance.get("/berita");
        return response.data.data
    }
)

// async thunk get berita by id
export const getBeritaById = createAsyncThunk(
    "berita/getBeritaById",
    async (id) => {
        const response = await ApiInstance.get(`/berita/${id}`);
        return response.data.data
    }
)

// asyn thunk delete berita
export const deleteBerita = createAsyncThunk(
    "berita/deleteBerita",
    async (id) => {
        await ApiInstance.delete(`/berita/${id}`);
        return id
    }
)

// asyn thunk edit berita
export const editBerita = createAsyncThunk(
    "berita/editBerita",
    async ({ id, beritaData }) => {
        const response = await ApiInstance.put(`/berita/${id}`, beritaData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data.data
    }
)

// async thunk add berita
export const addBerita = createAsyncThunk(
    "berita/addBerita",
    async (beritaData) => {
        const response = await ApiInstance.post("/berita", beritaData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        return response.data.data
    }
)

const beritaSlice = createSlice({
    name: 'berita',
    initialState: {
        dataBerita: [],
        beritaDetail: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all berita
            .addCase(getBerita.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getBerita.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.dataBerita = action.payload;
            })
            .addCase(getBerita.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // fetch berita by id
            .addCase(getBeritaById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getBeritaById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.beritaDetail = action.payload;
            })
            .addCase(getBeritaById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // delete berita
            .addCase(deleteBerita.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteBerita.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.dataBerita = state.dataBerita.filter(berita => berita.id !== action.payload);
            })
            .addCase(deleteBerita.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // edit berita
            .addCase(editBerita.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(editBerita.fulfilled, (state, action) => {
                state.status = "succeeded";
                const index = state.dataBerita.findIndex(berita => berita.id === action.payload.id);
                if (index !== -1) {
                    state.dataBerita[index] = action.payload;
                }
                if (state.beritaDetail?.id === action.payload.id) {
                    state.beritaDetail = action.payload;
                }
            })
            .addCase(editBerita.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // add berita
            .addCase(addBerita.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addBerita.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.dataBerita.push(action.payload);
            })
            .addCase(addBerita.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const { addBeritaa, deleteBeritaa, editeBerita, getAllBerita } = beritaSlice.actions;
export default beritaSlice.reducer;