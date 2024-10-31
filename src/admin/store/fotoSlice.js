import { createSlice } from "@reduxjs/toolkit";
import { albums } from "../../user/data";

const fotoSlice = createSlice({
    name: 'foto',
    initialState: {
        albums: albums,
    },
    reducers: {
        addAlbum: (state, action) => {
            state.albums.push(action.payload);
        },
        editAlbum: (state, action) => {
            const { id, title, description, images } = action.payload;
            const existingAlbum = state.albums.find(album => album.id === id);
            if (existingAlbum) {
                existingAlbum.title = title;
                existingAlbum.description = description;
                existingAlbum.images = images;
            };
        },
        deleteAlbum: (state, action) => {
            state.albums = state.albums.filter(album => album.id !== action.payload);
        }
    }
});

export const { addAlbum, editAlbum, deleteAlbum } = fotoSlice.actions;
export default fotoSlice.reducer;