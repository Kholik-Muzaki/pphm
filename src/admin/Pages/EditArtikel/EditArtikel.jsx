import React, { useState, useRef, useEffect } from 'react';
import Layout from "../../Layout/Layout";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './EditArtikel.css';
import ModalSuccess from '../../Component/ModalSuccess/ModalSuccess';
import { editArticle, getArtikelById } from '../../store/artikelSlice';
const EditArtikel = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const quillRef = useRef(null);

    const { artikelDetail, status, error } = useSelector((state) => state.artikel);

    // fetxhing article by id
    useEffect(() => {
        if (id) {
            dispatch(getArtikelById(id))
        }
    }, [id, dispatch]);

    // mengisi form setalah data diambil dari params

    useEffect(() => {
        if (artikelDetail) {
            setTitle(artikelDetail.title);
            setAuthor(artikelDetail.author);
            setDate(artikelDetail.date.split("T")[0]);
            setImage(artikelDetail.image);
            setContent(artikelDetail.content);
        }
    }, [artikelDetail]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedArticle = {
            title,
            author,
            date,
            image,
            content
        };

        dispatch(editArticle({ id, articleData: editedArticle }))
            .unwrap()
            .then(() => {
                setIsModalVisible(true);
            })
            .catch((err) => {
                alert("Gagal mengedit artikel: " + err.message)
            })
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-artikel');
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
        <Layout titlePage="Edit Artikel">
            <div className="container form-container">
                <div className="row justify-content-center row-form-add">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Edit Artikel</h4>
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
                                            placeholder="Tulis artikel di sini..."
                                        />
                                    </div>
                                    <div className="text-center mt-3 d-flex gap-3">
                                        <button type="submit" className="btn btn-success">
                                            Update Artikel
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
                    title='Sukses'
                    description='Artikel Berhasil Diperbarui'
                />
            )}
        </Layout>
    );
};

export default EditArtikel;
