import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiInstance from "../../api/api";

// async thunk getAll video
export const getVideo = createAsyncThunk(
    "video/getVideo",
    async () => {
        const response = await ApiInstance.get('/video');
        console.log(response.data.data);
        return response.data.data
    }
)

// async thunk get Video by Id
export const getVideoById = createAsyncThunk(
    'video/getVideoById',
    async (id) => {
        const response = await ApiInstance.get(`/video/${id}`);
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

// async thunk edit video
export const editVideo = createAsyncThunk(
    'video/editVideo',
    async ({ id, videoData }) => {
        const response = await ApiInstance.put(`/video/${id}`, videoData);
        return response.data.data
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
    reducers: {
        resetStatus: (state) => {
            state.status = "idle";
        }
    },
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

            // fetch video by id
            .addCase(getVideoById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getVideoById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.videoDetail = action.payload; // Store detail data
            })
            .addCase(getVideoById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // delete video
            .addCase(deleteVideo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteVideo.fulfilled, (state, action) => {
                state.videos = state.videos.filter(
                    (video) => video.id !== action.payload
                );
            })
            .addCase(deleteVideo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // add video
            .addCase(addVideo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addVideo.fulfilled, (state, action) => {
                state.videos.push(action.payload);
            })
            .addCase(addVideo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // edit video
            .addCase(editVideo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(editVideo.fulfilled, (state, action) => {
                const index = state.videos.findIndex(
                    (video) => video.id === action.payload.id
                );
                if (index !== -1) {
                    state.videos[index] = action.payload; // Update list video
                }
                if (state.videoDetail?.id === action.payload.id) {
                    state.videoDetail = action.payload; // Update detail jika sedang diakses
                }
            })
            .addCase(editVideo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });

    }


})

export const { resetStatus } = videoSlice.actions;
export default videoSlice.reducer;