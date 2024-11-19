import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./DetailKeuangan.css";

const DetailKeuangan = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Mengambil ID dari parameter URL
    const KeuanganList = useSelector((state) => state.keuangan.dataKeuangan); // Mendapatkan data dari Redux

    // Mencari data keuangan berdasarkan ID
    const keuangan = KeuanganList.find((item) => item.id.toString() === id);

    // Jika data tidak ditemukan
    if (!keuangan) {
        return (
            <Layout titlePage="Detail Keuangan">
                <div className="container mt-4 text-center">
                    <h4>Data tidak ditemukan</h4>
                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => navigate(-1)}
                    >
                        Kembali
                    </button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout titlePage="Detail Keuangan">
            <div className="container container-detail-keuangan mt-4">
                <div className="card card-detail-keuangan shadow">
                    <div className="card-header bg-primary text-white">
                        <h4 className="text-center">Detail Keuangan</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <strong>ID:</strong>
                            <p className="form-control">{keuangan.id}</p>
                        </div>
                        <div className="mb-3">
                            <strong>Jenis Transaksi:</strong>
                            <p className="form-control">{keuangan.jenisTransaksi}</p>
                        </div>
                        <div className="mb-3">
                            <strong>Jumlah:</strong>
                            <p className="form-control">{keuangan.jumlah}</p>
                        </div>
                        <div className="mb-3">
                            <strong>Tanggal:</strong>
                            <p className="form-control">{keuangan.tanggal}</p>
                        </div>
                        <div className="mb-3">
                            <strong>Keterangan:</strong>
                            <p className="form-control">{keuangan.keterangan}</p>
                        </div>
                        <div className="text-center">
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
                            >
                                Kembali
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DetailKeuangan;
