// Dashboard.js
import React, { useEffect, useState } from 'react';
import Layout from "../../Layout/Layout";
import './Dashboard.css';
import CardDashboard from '../../Component/CardDashboard/CardDashboard';
import ApiInstance from '../../../api/api';

const Dashboard = () => {
    const [summaryData, setSummaryData] = useState({
        transaksiMasuk: 0,
        transaksiKeluar: 0,
        totalPemasukan: 0,
        totalPengeluaran: 0,
        saldo: 0,
        totalArtikel: 0,
        totalBerita: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [keuanganResponse, artikelResponse, beritaResponse] = await Promise.all([
                    ApiInstance.get('/keuanganSummary'),
                    ApiInstance.get('/artikelSummary'),
                    ApiInstance.get('/beritaSummary')
                ]);
                setSummaryData({
                    transaksiMasuk: keuanganResponse.data.data.transaksiMasuk || 0,
                    transaksiKeluar: keuanganResponse.data.data.transaksiKeluar || 0,
                    totalPemasukan: keuanganResponse.data.data.totalPemasukan || 0,
                    totalPengeluaran: keuanganResponse.data.data.totalPengeluaran || 0,
                    saldo: keuanganResponse.data.data.saldo || 0,
                    totalArtikel: artikelResponse.data.data.totalArtikel || 0,
                    totalBerita: beritaResponse.data.data.totalBerita || 0
                })
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const cardsData = [
        { title: "Transaksi Masuk", number: summaryData.transaksiMasuk, iconClass: 'bx bx-cart-download', bgColor: 'card-transaksi-masuk' },
        { title: "Transaksi Keluar", number: summaryData.transaksiKeluar, iconClass: 'bx bxs-cart-add', bgColor: 'card-transaksi-keluar' },
        { title: "Total Pengeluaran", number: summaryData.totalPengeluaran, iconClass: 'bx bx-receipt', bgColor: 'card-total-pengeluaran' },
        { title: "Total Pemasukan", number: summaryData.totalPemasukan, iconClass: 'bx bx-barcode', bgColor: 'card-total-pemasukan' },
        { title: "Sisa Kas", number: summaryData.saldo, iconClass: 'bx bxs-badge-dollar', bgColor: 'card-sisa-kas' },
        { title: "Jumlah Artikel", number: summaryData.totalArtikel, iconClass: 'bx bx-library', bgColor: 'card-jumlah-artikel' },
        { title: "Jumlah Berita", number: summaryData.totalBerita, iconClass: 'bx bx-book-content', bgColor: 'card-jumlah-berita' },
    ];

    return (
        <Layout titlePage={"Dashboard"}>
            <div className="container">
                <div className="row row-dashboard">
                    {cardsData.map((card, index) => (
                        <div key={index} className="col-sm-12 col-md-4 col-lg-3 mb-4">
                            <CardDashboard
                                title={card.title}
                                number={card.number}
                                iconClass={card.iconClass}
                                bgColor={card.bgColor}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
