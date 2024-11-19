// Dashboard.js
import React, { useEffect, useState } from 'react';
import Layout from "../../Layout/Layout";
import CardDashboard from '../../../admin/Component/CardDashboard/CardDashboard';
import apiName from '../../../api/api';

const Dashboard = () => {
    // Data dummy untuk cards
    const cardsData = [
        { title: "Transaksi Masuk", number: 100, iconClass: 'bx bx-cart-download', bgColor: 'card-transaksi-masuk' },
        { title: "Transaksi Keluar", number: 200, iconClass: 'bx bxs-cart-add', bgColor: 'card-transaksi-keluar' },
        { title: "Total Pengeluaran", number: 300, iconClass: 'bx bx-receipt', bgColor: 'card-total-pengeluaran' },
        { title: "Total Pemasukan", number: 400, iconClass: 'bx bx-barcode', bgColor: 'card-total-pemasukan' },
        { title: "Sisa Kas", number: 500, iconClass: 'bx bxs-badge-dollar', bgColor: 'card-sisa-kas' },
        { title: "Jumlah Artikel", number: 600, iconClass: 'bx bx-library', bgColor: 'card-jumlah-artikel' },
        { title: "Jumlah Berita", number: 700, iconClass: 'bx bx-book-content', bgColor: 'card-jumlah-berita' },
    ];

    const [category, setCategory] = useState(null);
    const [error, setError] = useState(null);

    const fetchCategory = async () => {
        try {
            const response = await apiName.get('/category-products/1');
            console.log("Response Data:", response.data);
            setCategory(response.data.data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <Layout titlePage={"Dashboard"}>
            <div className="container">
                <h5>Categories</h5>
                {category ? (
                    <div>
                        <h6>Category: {category.category_name}</h6>
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Product Type</th>
                                    <th>Base Price</th>
                                    <th>Stock</th>
                                    <th>Code Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.products && category.products.length > 0 ? (
                                    category.products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.product_type}</td>
                                            <td>{product.base_price}</td>
                                            <td>{product.stock}</td>
                                            <td>{product.code_product}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No products available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    error ? <p>Error: {error}</p> :
                    <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  


                )}
            </div>
        </Layout>
    );
};

export default Dashboard;
