import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from "../../Layout/Layout";
import Pagination from "../../Component/Pagination/Pagination";
import { deleteAlbum } from '../../store/fotoSlice';
import ModalDelete from '../../Component/ModalDelete/ModalDelete';
import { Link, useNavigate } from 'react-router-dom';

const KelolaAlbum = () => {
    const albums = useSelector((state) => state.foto.albums);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [albumIdToDelete, setAlbumIdToDelete] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPageOptions = [3, 5, 10, 20];

    const handleDeleteClick = (id) => {
        setAlbumIdToDelete(id);
        setShowModal(true);
    };

    const handleDeleteConfirm = () => {
        if (albumIdToDelete !== null) {
            dispatch(deleteAlbum(albumIdToDelete));
            setShowModal(false);
            setAlbumIdToDelete(null);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        setAlbumIdToDelete(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const indexOfLastAlbum = currentPage * itemsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - itemsPerPage;

    const filteredAlbums = albums.filter((album) =>
        album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        album.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentAlbums = filteredAlbums.slice(indexOfFirstAlbum, indexOfLastAlbum);
    const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (newItemsPerPage) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    const truncateDescription = (description, wordLimit) => {
        if (!description) return '';
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    return (
        <Layout titlePage="Kelola Album Foto">
            <div className="wrap-table-content-whitout-card">
                <div className="row">
                    <div className="col-4 mb-2">
                        <input
                            type="text"
                            placeholder="Cari Album"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-2 ms-auto">
                        <Link to='/admin/tambah-foto'>
                            <button type="button" className="btn btn-primary">Tambah Album</button>
                        </Link>
                    </div>
                </div>
                <div className="overflow-table">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="custom-thead">
                                <tr className="table-head">
                                    <th style={{ width: '5%' }}>ID</th>
                                    <th style={{ width: '20%' }}>Judul</th>
                                    <th style={{ width: '35%' }}>Deskripsi</th>
                                    <th style={{ width: '25%' }}>Preview</th>
                                    <th style={{ width: '15%' }}>Action</th>
                                </tr>

                            </thead>
                            <tbody className='custom-tbody'>
                                {filteredAlbums.length > 0 ? (
                                    currentAlbums.map((album) => (
                                        <tr key={album.id} className='align-middle'>
                                            <td>{album.id}</td>
                                            <td>{album.title}</td>
                                            <td>{truncateDescription(album.description, 10)}</td>
                                            <td>
                                                <div className="image-previews">
                                                    {album.images.slice(0, 3).map((image, index) => (
                                                        <img
                                                            key={index}
                                                            src={image.url}
                                                            alt={`Preview ${index + 1}`}
                                                            style={{
                                                                width: '50px',
                                                                height: '50px',
                                                                objectFit: 'cover',
                                                                marginRight: '5px'
                                                            }}
                                                        />
                                                    ))}
                                                    {album.images.length > 3 && <span>+{album.images.length - 3}</span>}
                                                </div>
                                            </td>
                                            <td className='action-buttons'>
                                                <Link to={`/admin/edit-foto/${album.id}`}>
                                                    <button className='btn btn-outline-warning me-3'><i className='bx bxs-edit-alt' /></button>
                                                </Link>
                                                <button className='btn btn-danger me-3' onClick={() => handleDeleteClick(album.id)}><i className='bx bx-trash' /></button>
                                                <button className='btn btn-primary me-3' onClick={() => navigate('/galeri-foto-video')}><i className='bx bx-show' /></button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="text-center">
                                            <h6 className='mt-2'>Data album tidak ditemukan</h6>
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
                        title="Hapus Album"
                        description="Apakah Anda yakin ingin menghapus album ini?"
                    />
                )}
            </div>
        </Layout>
    );
};

export default KelolaAlbum;
