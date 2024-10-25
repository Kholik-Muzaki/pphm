// Dashboard.js
import React from 'react';
import Layout from "../../Layout/Layout";
import './Dashboard.css';
import CardDashboard from '../../Component/CardDashboard/CardDashboard';

const Dashboard = () => {
    // Data dummy
    const cardsData = [
        { title: "Transaksi Masuk", number: 100, iconClass: 'bx bx-cart-download', bgColor: 'card-transaksi-masuk' },
        { title: "Transaksi Keluar", number: 200, iconClass: 'bx bxs-cart-add', bgColor: 'card-transaksi-keluar' },
        { title: "Total Pengeluaran", number: 300, iconClass: 'bx bx-receipt', bgColor: 'card-total-pengeluaran' },
        { title: "Total Pemasukan", number: 400, iconClass: 'bx bx-barcode', bgColor: 'card-total-pemasukan' },
        { title: "Sisa Kas", number: 500, iconClass: 'bx bxs-badge-dollar', bgColor: 'card-sisa-kas' },
        { title: "Jumlah Artikel", number: 600, iconClass: 'bx bx-library', bgColor: 'card-jumlah-artikel' },
        { title: "Jumlah Berita", number: 700, iconClass: 'bx bx-book-content', bgColor: 'card-jumlah-berita' },
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
