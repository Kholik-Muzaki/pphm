import { createSlice } from "@reduxjs/toolkit";
import { dataBerita } from "../../user/data";

const beritaSlice = createSlice({
    name: 'berita',
    initialState: {
        dataBerita: dataBerita
    },
    reducers: {
        addBerita: (state, action) => {
            state.dataBerita.push(action.payload);
        },
        deleteBerita: (state, action) => {
            state.dataBerita = state.dataBerita.filter(berita => berita.id !== action.payload);
        },
        editBerita: (state, action) => {
            const { id, title, content, author, image } = action.payload;
            const existingBerita = state.dataBerita.find(berita => berita.id === id);
            if (existingBerita) {
                existingBerita.title = title;
                existingBerita.content = content;
                existingBerita.author = author;
                existingBerita.image = image;
            }
        },
    },
});

export const { addBerita, deleteBerita, editBerita } = beritaSlice.actions;
export default beritaSlice.reducer;