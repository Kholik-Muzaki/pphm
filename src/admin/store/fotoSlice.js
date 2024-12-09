import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiInstance from "../../api/api";

// async thunk get all album
export const getAllAlbum = createAsyncThunk(
    "album/getAllAlbum",
    async () => {
        const response = await ApiInstance.get('/album');
        return response.data.data
    }
)

// async thunk get album by id
export const getAlbumById = createAsyncThunk(
    'album/getAlbumById',
    async (id) => {
        const response = await ApiInstance.get(`/album/${id}`);
        return response.data.data
    }
)

// async thunk delete album
export const deleteAlbum = createAsyncThunk(
    "album/deleteAlbum",
    async (id) => {
        await ApiInstance.delete(`/album/${id}`);
        return id
    }
)

// async thunk edit album
export const editAlbum = createAsyncThunk(
    "album/editAlbum",
    async ({ id, albumData }) => {
        const response = await ApiInstance.put(`/album/${id}`, albumData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data.data;
    }
);

// async thunk add album
export const addAlbum = createAsyncThunk(
    "album/addAlbum",
    async (albumData) => {
        const response = await ApiInstance.post("/album", albumData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data.data;
    }
);

const fotoSlice = createSlice({
    name: 'foto',
    initialState: {
        albums: [],
        albumDetail: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all album
            .addCase(getAllAlbum.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllAlbum.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.albums = action.payload
            })
            .addCase(getAllAlbum.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // fetch album by id
            .addCase(getAlbumById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAlbumById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.albumDetail = action.payload
            })
            .addCase(getAlbumById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // delete album
            .addCase(deleteAlbum.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteAlbum.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.albums = state.albums.filter((album) => album.id !== action.payload);
            })
            .addCase(deleteAlbum.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // update album
            .addCase(editAlbum.pending, (state) => {
                state.status = "loading"
            })
            .addCase(editAlbum.fulfilled, (state, action) => {
                state.status = "succeeded";
                const index = state.albums.findIndex((album) => album.id === action.payload.id);
                if (index !== -1) {
                    state.albums[index] = action.payload;
                }
                if (state.albumDetail?.id === action.payload.id) {
                    state.albumDetail = action.payload;
                }
            })
            .addCase(editAlbum.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // add album
            .addCase(addAlbum.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addAlbum.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.albums.push(action.payload);
            })
            .addCase(addAlbum.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const { addAlbums, editAlbums, deleteAlbums } = fotoSlice.actions;
export default fotoSlice.reducer;