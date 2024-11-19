import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../Component/Pagination/Pagination";
import Layout from "../../Layout/Layout";
import Search from '../../Component/Search/Search';
import image from '../../../Image';
import { Link, useNavigate } from 'react-router-dom';
import ModalDelete from '../../Component/ModalDelete/ModalDelete';
import { deleteVideo } from '../../store/videoSlice';

const KelolaVideo = () => {
    const videos = useSelector((state) => state.video.videos);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [videoToDelete, setVideoToDelete] = useState(null);
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPageOptions = [3, 5, 10, 20];

    // Handle Delete Click
    const handleDeleteClick = (id) => {
        setVideoToDelete(id);
        setShowModal(true);
    };

    const handleDeleteConfirm = () => {
        if (videoToDelete !== null) {
            dispatch(deleteVideo(videoToDelete));
            setShowModal(false);
            setVideoToDelete(null);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        setVideoToDelete(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    // pagination
    const indexOfLastVideo = currentPage * itemsPerPage;
    const indexOfFirstVideo = indexOfLastVideo - itemsPerPage;

    const filteredVideo = videos.filter((video) =>
        video.judul && video.judul.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentVideos = filteredVideo.slice(indexOfFirstVideo, indexOfLastVideo);
    const totalPages = Math.ceil(filteredVideo.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (newItemsPerPage) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    return (
        <Layout titlePage="Kelola Album Video">
            <div className="wrap-table-content-whitout-card">
                <div className="row">
                    <div className="col-4 mb-2">
                        <Search onSearchChange={handleSearchChange} />
                    </div>
                    <div className="col-2 ms-auto">
                        <Link to='/admin/tambah-video'>
                            <button type="button" className="btn btn-primary">Tambah Video</button>
                        </Link>
                    </div>
                </div>
                <div className="overflow-table">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="custom-thead">
                                <tr className="table-head">
                                    <th style={{ width: '5%' }}>ID</th>
                                    <th style={{ width: '35%' }}>Judul</th>
                                    <th style={{ width: '45%' }}>Link Video</th>
                                    <th style={{ width: '15%' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody className='custom-tbody'>
                                {filteredVideo.length > 0 ? (
                                    currentVideos.map((video) => (
                                        <tr key={video.id} className='align-middle'>
                                            <td>{video.id}</td>
                                            <td>{video.judul}</td>
                                            <td>{video.link}</td>
                                            <td className='action-buttons'>
                                                <Link to={`/admin/edit-video/${video.id}`}>
                                                    <button className='btn btn-outline-warning me-3'><i className='bx bxs-edit-alt' /></button>
                                                </Link>
                                                <button className='btn btn-danger me-3' onClick={() => handleDeleteClick(video.id)}><i className='bx bx-trash' /></button>
                                                <button className='btn btn-primary me-3' onClick={() => navigate('/galeri-foto-video')}><i className='bx bx-show' /></button>
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
                        title="Hapus Video"
                        description="Apakah Anda yakin ingin menghapus Video ini?"
                    />
                )}
            </div>
        </Layout>
    );
};

export default KelolaVideo;
