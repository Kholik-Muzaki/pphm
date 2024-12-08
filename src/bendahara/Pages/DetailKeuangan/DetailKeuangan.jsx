import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./DetailKeuangan.css";
import { getKeuanganById } from "../../../admin/store/keuanganSlice";

const DetailKeuangan = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { keuanganDetail, status, error } = useSelector((state) => state.keuangan);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getKeuanganById(id))
        }
    }, [id, dispatch])

    if (status === "loading") {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (status === "failed") {
        return (
            <div className="alert alert-danger">
                <h4>Terjadi Kesalahan:</h4>
                <p>{error}</p>
            </div>
        )
    }
    // Jika data tidak ditemukan
    if (!keuanganDetail) {
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
                            <p className="form-control">{keuanganDetail.id}</p>
                        </div>
                        <div className="mb-3">
                            <strong>Jenis Transaksi:</strong>
                            <p className="form-control">{keuanganDetail.jenisTransaksi}</p>
                        </div>
                        <div className="mb-3">
                            <strong>Jumlah:</strong>
                            <p className="form-control">{keuanganDetail.jumlah}</p>
                        </div>
                        <div className="mb-3">
                            <strong>Tanggal:</strong>
                            <p className="form-control">{keuanganDetail.tanggal}</p>
                        </div>
                        <div className="mb-3">
                            <strong>Keterangan:</strong>
                            <p className="form-control">{keuanganDetail.keterangan}</p>
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
