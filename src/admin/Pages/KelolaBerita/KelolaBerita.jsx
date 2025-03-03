import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../Component/Pagination/Pagination";
import Layout from "../../Layout/Layout";
import Search from '../../Component/Search/Search';
import image from '../../../Image';
import { Link } from 'react-router-dom';
import { deleteBerita, getBerita } from '../../store/beritaSlice';
import ModalDelete from '../../Component/ModalDelete/ModalDelete';

const KelolaBerita = () => {
    const dispatch = useDispatch();
    const { dataBerita, status, error } = useSelector((state) => state.berita);
    const [showModal, setShowModal] = useState(false);
    const [beritaIdToDelete, setBeritaIdToDelete] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPageOptions = [3, 5, 10, 20];

    // fetching all berita
    useEffect(() => {
        if (status === "idle") {
            dispatch(getBerita());
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
        setBeritaIdToDelete(id);
        setShowModal(true);
    };

    const handleDeleteConfirm = () => {
        if (beritaIdToDelete !== null) {
            dispatch(deleteBerita(beritaIdToDelete))
                .unwrap()
                .then(() => {
                    alert('Data berhasil dihapus');
                    dispatch(getBerita())
                })
                .catch((error) => {
                    alert('Gagal menghapus data artikel', error)
                })
                .finally(() => {
                    setShowModal(false);
                    setBeritaIdToDelete(null);
                })
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        setBeritaIdToDelete(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const indexOfLastBerita = currentPage * itemsPerPage;
    const indexOfFirstBerita = indexOfLastBerita - itemsPerPage;

    const filteredBerita = dataBerita.filter((berita) =>
        berita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        berita.content.toLowerCase().includes(searchTerm.toLowerCase()) || // Pastikan ini adalah field yang benar
        berita.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentBerita = filteredBerita.slice(indexOfFirstBerita, indexOfLastBerita);
    const totalPages = Math.ceil(filteredBerita.length / itemsPerPage);

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
        <Layout titlePage="Kelola Berita">
            <div className="wrap-table-content-whitout-card">
                <div className="row">
                    <div className="col-4 mb-2">
                        <Search onSearchChange={handleSearchChange} />
                    </div>
                    <div className="col-2 ms-auto">
                        <Link to='/admin/tambah-berita'>
                            <button type="button" className="btn btn-primary">Tambah Berita</button>
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
                                {filteredBerita.length > 0 ? (
                                    currentBerita.map((berita) => (
                                        <tr key={berita.id} className='align-middle'>
                                            <td>{berita.id}</td>
                                            <td>
                                                {berita.image && <img src={`https://api.pphmbersole.site/${berita.image}`} alt={berita.title} style={{ width: '50px', height: '50px' }} />}
                                            </td>
                                            <td>{berita.title}</td>
                                            <td>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: truncateContent(berita.content, 10),
                                                    }}
                                                />
                                            </td>
                                            <td>{berita.author}</td>
                                            <td>{berita.date.split("T")[0]}</td>

                                            <td className='action-buttons'>
                                                <Link to={`/admin/edit-berita/${berita.id}`}>
                                                    <button className='btn btn-outline-warning me-2'><i className='bx bxs-edit-alt' /></button>
                                                </Link>
                                                <button className='btn btn-danger me-2' onClick={() => handleDeleteClick(berita.id)}><i className='bx bx-trash' /></button>
                                                <Link to={`/berita/${berita.id}`}>
                                                    <button className='btn btn-primary me-2'><i className='bx bx-show' /></button>
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
                        title="Hapus Berita"
                        description="Apakah Anda yakin ingin menghapus Berita ini?"
                    />
                )}
            </div>
        </Layout>
    );
};

export default KelolaBerita;
