import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from "../../Component/Pagination/Pagination";
import Layout from "../../Layout/Layout";
import "./KelolaArtikel.css";
import Search from '../../Component/Search/Search';
import image from '../../../Image';
import { Link } from 'react-router-dom';

const KelolaArtikel = () => {
    const articles = useSelector((state) => state.artikel.articles); // Ambil artikel dari Redux state

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPageOptions = [3, 5, 10, 20];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const indexOfLastArticle = currentPage * itemsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (newItemsPerPage) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    const truncateContent = (content, wordLimit) => {
        if (!content) return '';
        const words = content.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : content;
    };

    return (
        <Layout titlePage="Kelola Artikel">
            <div className="wrap-table-content-whitout-card">
                <div className="row">
                    <div className="col-4 mb-2"><Search onSearchChange={handleSearchChange} /></div>
                    <div className="col-2 ms-auto">
                        <Link to='/admin/tambah-artikel'>
                            <button type="button" className="btn btn-primary">Tambah artikel </button>
                        </Link>
                    </div>
                </div>
                <div className="overflow-table">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="custom-thead">
                                <tr className='table-head'>
                                    <th>ID</th>
                                    <th>Judul</th>
                                    <th>Konten</th>
                                    <th>Penulis</th>
                                    <th>Tanggal</th>
                                    <th>Gambar</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='custom-tbody'>
                                {filteredArticles.length > 0 ? (
                                    currentArticles.map((article, index) => (
                                        <tr key={index} className='align-middle'>
                                            <td>{article.id}</td>
                                            <td>{article.title}</td>
                                            <td>{truncateContent(article.content, 10)}</td>
                                            <td>{article.author}</td>
                                            <td>{article.date}</td>
                                            <td>{article.image}</td>
                                            <td className=''>
                                                <button className='btn btn-danger mb-1 px-0'><i className='bx bx-trash' /> </button>
                                                <button className='btn btn-warning mb-1 px-0'><i className='bx bxs-edit-alt text-white' /> </button>
                                                <button className='btn btn-primary mb-1 px-0'><i className='bx bx-show' /></button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="text-center">
                                            <img src={image.notFound} alt="" className='mt-5' />
                                            <h6 className='mt-2'>Data tidak ditemukan</h6>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    itemsPerPage={itemsPerPage}
                    itemsPerPageOptions={itemsPerPageOptions}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />
            </div>
        </Layout>
    )
}

export default KelolaArtikel;
