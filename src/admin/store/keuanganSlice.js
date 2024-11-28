import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiInstance from "../../api/api";

// asyn thunk get all keuangan
export const getKeuangan = createAsyncThunk(
    "keuangan/getKeuangan",
    async () => {
        const response = await ApiInstance.get("/keuangan");
        return response.data.data;
    }
);

// asyn thunk get keuangan by id
export const getKeuanganById = createAsyncThunk(
    "keuangan/getKeuanganById",
    async (id) => {
        const response = await ApiInstance.get(`/keuangan/${id}`);
        return response.data.data;
    }
);

// asyn thunk add new keuangan
export const addKeuangan = createAsyncThunk(
    "keuangan/addKeuangan",
    async (keuanganData) => {
        const response = await ApiInstance.post("/keuangan", keuanganData);
        return response.data.data;
    }
);

// asyn thunk update keuangan
export const updateKeuangan = createAsyncThunk(
    "keuangan/updateKeuangan",
    async ({ id, keuanganData }) => {
        const response = await ApiInstance.put(`/keuangan/${id}`, keuanganData);
        return response.data.data;
    }
);

// asyn thunk delete keuangan
export const deleteKeuangan = createAsyncThunk(
    "keuangan/deleteKeuangan",
    async (id) => {
        await ApiInstance.delete(`/keuangan/${id}`);
        return id;
    }
);

// slice definition
const keuanganSlice = createSlice({
    name: "keuangan",
    initialState: {
        dataKeuangan: [], 
        keuanganDetail: null, 
        status: "idle", 
        error: null, 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch all keuangan
            .addCase(getKeuangan.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getKeuangan.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.dataKeuangan = action.payload; // Store all fetched data
            })
            .addCase(getKeuangan.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // Fetch keuangan by ID
            .addCase(getKeuanganById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getKeuanganById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.keuanganDetail = action.payload; // Store detail data
            })
            .addCase(getKeuanganById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // Add new keuangan
            .addCase(addKeuangan.fulfilled, (state, action) => {
                state.dataKeuangan.push(action.payload); // Add the new data to the list
            })

            // Update keuangan
            .addCase(updateKeuangan.fulfilled, (state, action) => {
                const index = state.dataKeuangan.findIndex(
                    (keuangan) => keuangan.id === action.payload.id
                );
                if (index !== -1) {
                    state.dataKeuangan[index] = action.payload; // Update the specific data
                }
                if (state.keuanganDetail?.id === action.payload.id) {
                    state.keuanganDetail = action.payload; // Update detail if currently editing
                }
            })

            // Delete keuangan
            .addCase(deleteKeuangan.fulfilled, (state, action) => {
                state.dataKeuangan = state.dataKeuangan.filter(
                    (keuangan) => keuangan.id !== action.payload
                ); // Remove the deleted data
            });
    },
});

export default keuanganSlice.reducer;
