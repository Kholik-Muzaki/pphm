import { createSlice } from "@reduxjs/toolkit";
import { linkVideo } from "../../user/data";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videos: linkVideo,
    },
    reducers: {
        addVideo: (state, action) => {
            state.videos.push(action.payload);
        },
        deleteVideo: (state, action) => {
            state.videos = state.videos.filter(video => video.id !== action.payload);
        },
        editVideo: (state, action) => {
            const { id, title, link } = action.payload;
            const existingVideo = state.videos.find(video => video.id === id);
            if (existingVideo) {
                existingVideo.title = title;
                existingVideo.link = link;
            }
        }
    }
})

export const { addVideo, deleteVideo, editVideo } = videoSlice.actions;
export default videoSlice.reducer;