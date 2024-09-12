import React, { useState } from 'react';
import Layout from "../../Layout/Layout";
import './KelolaArtikel.css';
import { articlesData } from '../../../user/data';

const KelolaArtikel = () => {
    const articlesPerPage = 5; // jumlah artikel per halaman
    const [currentPage, setCurrentPage] = useState(1);

    // Hitung indeks awal dan akhir artikel untuk halaman yang sedang aktif
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);

    // Fungsi untuk mengubah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const truncateContent = (content, wordLimit) => {
        const words = content.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : content;
    };

    return (
        <>
            <Layout titlePage="Kelola Artikel">
                <div className="container container-atas">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th style={{ width: '20%' }}>Title</th>
                                        <th style={{ width: '15%' }}>Author</th>
                                        <th style={{ width: '15%' }}>Date</th>
                                        <th style={{ width: '40%' }}>Content</th>
                                        <th style={{ width: '10%' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentArticles.map((article, index) => (
                                        <tr key={index}>
                                            <td>{article.Title}</td>
                                            <td>{article.Author}</td>
                                            <td>{article.Date}</td>
                                            <td>{truncateContent(article.Content, 10)}</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm mb-2">Edit</button>
                                                <button className="btn btn-danger btn-sm ml-2">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Pagination */}
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {Array(Math.ceil(articlesData.length / articlesPerPage)).fill().map((_, index) => (
                                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                            <button onClick={() => paginate(index + 1)} className="page-link">
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default KelolaArtikel;
