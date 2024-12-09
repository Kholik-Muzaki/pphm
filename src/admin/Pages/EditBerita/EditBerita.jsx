import React, { useState, useRef, useEffect } from 'react';
import Layout from "../../Layout/Layout";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './EditBerita.css';
import ModalSuccess from '../../Component/ModalSuccess/ModalSuccess';
import { editBerita, getBeritaById } from '../../store/beritaSlice';

const EditBerita = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const quillRef = useRef(null);

    // Ambil berita berdasarkan ID
    const { beritaDetail, status, error } = useSelector((state) => state.berita);

    useEffect(() => {
        if (id) {
            dispatch(getBeritaById(id))
        }
    }, [id, dispatch]);

    // mengisi form setelah data diambil dari params\
    useEffect(() => {
        if (beritaDetail) {
            setTitle(beritaDetail.title);
            setAuthor(beritaDetail.author);
            setDate(beritaDetail.date.split("T")[0]);
            setImage(beritaDetail.image);
            setContent(beritaDetail.content);
        }
    }, [beritaDetail, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedBerita = {
            title,
            author,
            date,
            image,
            content
        };
        dispatch(editBerita({ id, beritaData: editedBerita }))
            .unwrap()
            .then(() => {
                setIsModalVisible(true)
            })
            .catch((error) => {
                alert("Gagal mengedit berita: " + error.message)
            })
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-berita');
    };

    if (status === 'loading') {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    if (status === 'failed') {
        return (
            <div className="alert alert-danger">
                <h4>Terjadi Kesalahan:</h4>
                <p>{error}</p>
            </div>
        );
    }


    return (
        <Layout titlePage="Edit Berita">
            <div className="container form-container">
                <div className="row justify-content-center row-form-edit">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Edit Berita</h4>
                            </div>
                            <div className="card-body card-body-edit">
                                <form onSubmit={handleSubmit} className='form-edit-berita'>
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
                                            className="form-control text-dark"
                                            id="image"
                                            accept='image/*'
                                            onChange={(e) => setImage(e.target.files[0])}
                                            required
                                        />
                                    </div>
                                    <div className="form-group text-dark">
                                        <label htmlFor="content" className='text-dark fw-bold'>Content : </label>
                                        <ReactQuill
                                            theme="snow"
                                            value={content}
                                            onChange={setContent}
                                            className="editor"
                                            placeholder="Tulis berita di sini..."
                                        />
                                    </div>
                                    <div className="text-center mt-3 d-flex gap-3">
                                        <button type="submit" className="btn btn-success">
                                            Update Berita
                                        </button>
                                        <button type="button" className="btn btn-secondary ml-3" onClick={() => navigate('/admin/kelola-berita')}>
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
                    title='Sukses'
                    description='Berita Berhasil Diperbarui'
                />
            )}
        </Layout>
    );
};

export default EditBerita;
