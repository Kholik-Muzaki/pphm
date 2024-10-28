import { createSlice } from "@reduxjs/toolkit";
import { DataKeuangan } from "../../user/data";

const keuanganSlice = createSlice({
    name: "keuangan",
    initialState: {
        dataKeuangan: DataKeuangan
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
})

export const { addKeuangan, deleteKeuangan, editKeuangan } = keuanganSlice.actions;
export default keuanganSlice.reducer;