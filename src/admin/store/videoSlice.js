import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiInstance from "../../api/api";

// async thunk delete video
export const getVideo = createAsyncThunk(
    "video/getVideo",
    async () => {
        const response = await ApiInstance.get('/video');
        console.log(response.data.data);
        return response.data.data
    }
)

// async thunk delete video
export const deleteVideo = createAsyncThunk(
    'video/deleteVideo',
    async (id) => {
        await ApiInstance.delete(`/video/${id}`);
        return id
    }

)

// asyn thunk add video
export const addVideo = createAsyncThunk(
    'video/addVideo',
    async (videoData) => {
        const response = await ApiInstance.post('/video', videoData);
        return response.data.data;
    }
)

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videos: [],
        videoDetail: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all videos
            .addCase(getVideo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getVideo.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.videos = action.payload; // Store all fetched data
            })
            .addCase(getVideo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            // delete video
            .addCase(deleteVideo.fulfilled, (state, action) => {
                state.videos = state.videos.filter(
                    (video) => video.id !== action.payload
                );
            })
            // add video
            .addCase(addVideo.fulfilled, (state, action) => {
                state.videos.push(action.payload);
            })

    }


})

export default videoSlice.reducer;