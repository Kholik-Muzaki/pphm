import React, { useState, useRef } from 'react';
import Layout from "../../Layout/Layout";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './TambahArtikel.css';
import ModalSuccess from '../../Component/ModalSuccess/ModalSuccess';
import { addArticle } from '../../store/artikelSlice';

const TambahArtikel = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quillRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('date', date);
        formData.append('image', image);
        formData.append('content', content);

        dispatch(addArticle(formData))
            .unwrap()
            .then(() => {
                setIsModalVisible(true);
            })
            .catch((error) => {
                alert('Gagal menambahkan data artikel', error);
            })
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-artikel');
    };

    return (
        <Layout titlePage="Tambah Artikel">
            <div className="container form-container">
                <div className="row justify-content-center row-form-add">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Buat Artikel Baru</h4>
                            </div>
                            <div className="card-body card-body-add">
                                <form onSubmit={handleSubmit} className='form-add-artikel'>
                                    <div className="form-group">
                                        <label htmlFor="title" className='text-dark fw-bold'>Title :</label>
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
                                        <label htmlFor="author" className='text-dark fw-bold'>Author:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="author"
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date" className='text-dark fw-bold'>Date :</label>
                                        <input
                                            type="date"
                                            className="form-control text-dark"
                                            id="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image" className='text-dark fw-bold'>Image :</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            name='image'
                                            id="image"
                                            accept="image/*"
                                            onChange={(e) => setImage(e.target.files[0])}
                                            required
                                        />
                                    </div>
                                    <div className="form-group text-dark">
                                        <label htmlFor="content" className='text-dark fw-bold'>Content : </label>
                                        <ReactQuill
                                            ref={quillRef}
                                            theme="snow"
                                            value={content}
                                            onChange={setContent}
                                            className="editor"
                                            placeholder="Tulis artikel di sini..."
                                        />
                                    </div>
                                    <div className="text-center mt-3 d-flex gap-3">
                                        <button type="submit" className="btn btn-success">
                                            Simpan Artikel
                                        </button>
                                        <button type="button" className="btn btn-secondary ml-3" onClick={() => navigate('/admin/kelola-artikel')}>
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
                    description={'Artikel Berhasil Ditambahkan'} />
            )}
        </Layout>
    );
};

export default TambahArtikel;
