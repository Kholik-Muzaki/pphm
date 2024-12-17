import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../Component/Pagination/Pagination";
import Layout from "../../Layout/Layout";
import "./KelolaArtikel.css";
import Search from '../../Component/Search/Search';
import image from '../../../Image';
import { Link } from 'react-router-dom';
import { deleteArticle, getArticle } from '../../store/artikelSlice';
import ModalDelete from '../../Component/ModalDelete/ModalDelete';

const KelolaArtikel = () => {
    const dispatch = useDispatch();
    const { articles, status, error } = useSelector((state) => state.artikel);
    const [showModal, setShowModal] = useState(false);
    const [articleToDelete, setArticleToDelete] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPageOptions = [3, 5, 10, 20];

    // fetch all articles
    useEffect(() => {
        if (status === "idle") {
            dispatch(getArticle());
        }
    }, [dispatch, status]);

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

    // Handle Delete Click
    const handleDeleteClick = (id) => {
        setArticleToDelete(id);
        setShowModal(true);
    };

    const handleDeleteConfirm = () => {
        if (articleToDelete !== null) {
            dispatch(deleteArticle(articleToDelete))
                .unwrap()
                .then(() => {
                    alert('Data berhasil dihapus');
                    dispatch(getArticle());
                })
                .catch((error) => {
                    alert('Gagal menghapus data artikel', error);
                })
                .finally(() => {
                    setShowModal(false);
                    setArticleToDelete(null);
                })
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        setArticleToDelete(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const indexOfLastArticle = currentPage * itemsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                    <div className="col-4 mb-2">
                        <Search onSearchChange={handleSearchChange} />
                    </div>
                    <div className="col-2 ms-auto">
                        <Link to='/admin/tambah-artikel'>
                            <button type="button" className="btn btn-primary">Tambah Artikel</button>
                        </Link>
                    </div>
                </div>
                <div className="overflow-table">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="custom-thead">
                                <tr className='table-head'>
                                    <th style={{ width: '5%' }}>ID</th>
                                    <th style={{ width: '10%' }}>Gambar</th>
                                    <th style={{ width: '20%' }}>Judul</th>
                                    <th style={{ width: '30%' }}>Konten</th>
                                    <th style={{ width: '10%' }}>Penulis</th>
                                    <th style={{ width: '10%' }}>Tanggal</th>
                                    <th style={{ width: '15%' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody className='custom-tbody'>
                                {filteredArticles.length > 0 ? (
                                    currentArticles.map((article) => (
                                        <tr key={article.id} className='align-middle'>
                                            <td>{article.id}</td>
                                            <td>
                                                {article.image && <img src={`https://api.pphmbersole.site/${article.image}`} alt={article.title} style={{ width: '50px', height: '50px' }} />}
                                            </td>
                                            <td>{article.title}</td>
                                            <td>{truncateContent(article.content, 10)}</td>
                                            <td>{article.author}</td>
                                            <td>{article.date}</td>

                                            <td className='action-buttons'>
                                                <Link to={`/admin/edit-artikel/${article.id}`}>
                                                    <button className='btn btn-outline-warning me-2'><i className='bx bxs-edit-alt' /></button>
                                                </Link>
                                                <button className='btn btn-danger me-2' onClick={() => handleDeleteClick(article.id)}><i className='bx bx-trash' /></button>
                                                <Link to={`/artikel/${article.id}`}>
                                                    <button className='btn btn-primary'><i className='bx bx-show' /></button>
                                                </Link>
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

                {/* Modal Konfirmasi Delete */}
                {showModal && (
                    <ModalDelete
                        onClose={handleModalClose}
                        onConfirm={handleDeleteConfirm}
                        title="Hapus Artikel"
                        description="Apakah Anda yakin ingin menghapus artikel ini?"
                    />
                )}
            </div>
        </Layout>
    );
};

export default KelolaArtikel;
