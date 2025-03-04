import React, { useState } from 'react';
import Layout from "../../Layout/Layout";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModalSuccess from '../../Component/ModalSuccess/ModalSuccess';
import { addAlbum, getAllAlbum } from '../../store/fotoSlice';

const TambahFoto = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        images.forEach((image) => {
            formData.append('images', image);
        });

        dispatch(addAlbum(formData))
            .unwrap()
            .then(() => {
                setIsModalVisible(true);
                dispatch(getAllAlbum());
            })
            .catch((error) => {
                alert('Gagal menambahkan data album', error);
            });
    };
    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-foto');
    };
    return (
        <Layout titlePage="Tambah Album">
            <div className="container form-container">
                <div className="row justify-content-center row-form-add">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Buat Album Baru</h4>
                            </div>
                            <div className="card-body card-body-add">
                                <form onSubmit={handleSubmit} className='form-add-album'>
                                    <div className="form-group">
                                        <label htmlFor="title" className='text-dark fw-bold'>Judul Album :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description" className='text-dark fw-bold'>Deskripsi:</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            rows="3"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="images" className='text-dark fw-bold'>Gambar Album :</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="images"
                                            accept="image/*"
                                            onChange={(e) => setImages(Array.from(e.target.files))}
                                            multiple
                                            required
                                        />
                                    </div>
                                    <div className="text-center mt-3 d-flex gap-3">
                                        <button type="submit" className="btn btn-success">
                                            Simpan Album
                                        </button>
                                        <button type="button" className="btn btn-secondary ml-3" onClick={() => navigate('/admin/kelola-album')}>
                                            Kembali
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalVisible && (
                <ModalSuccess
                    onClose={handleModalClose}
                    title={'Sukses'}
                    description={'Album Berhasil Ditambahkan'} />
            )}
        </Layout>
    );
};

export default TambahFoto;
