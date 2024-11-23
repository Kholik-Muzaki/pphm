import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataKeuangan } from "../../user/data";
import ApiInstance from "../../api/api";

export const fetchKeuangan = createAsyncThunk(
    "keuangan/fetchKeuangan",
    async () => {
        const response = await ApiInstance.get("/api/auth/keuangan");
        return response.data;
    })

const keuanganSlice = createSlice({
    name: "keuangan",
    initialState: {
        dataKeuangan: [],
        status: "idle",
        error: null
    },
    reducers: {
        addKeuangan: (state, action) => {
            state.dataKeuangan.push(action.payload);
        },
        deleteKeuangan: (state, action) => {
            state.dataKeuangan = state.dataKeuangan.filter(keuangan => keuangan.id !== action.payload);
        },
        editKeuangan: (state, action) => {
            const { id, jenisTransaksi, jumlah, tanggal, keterangan } = action.payload;
            const existingKeuangan = state.dataKeuangan.find(keuangan => keuangan.id === id);
            if (existingKeuangan) {
                existingKeuangan.jenisTransaksi = jenisTransaksi;
                existingKeuangan.jumlah = jumlah;
                existingKeuangan.tanggal = tanggal;
                existingKeuangan.keterangan = keterangan;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchKeuangan.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchKeuangan.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.dataKeuangan = action.payload;
            })
            .addCase(fetchKeuangan.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const { addKeuangan, deleteKeuangan, editKeuangan } = keuanganSlice.actions;
export default keuanganSlice.reducer;