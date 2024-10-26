import React, { useState, useRef, useEffect } from 'react';
import Layout from "../../Layout/Layout";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './EditArtikel.css';
import ModalSuccess from '../../Component/ModalSuccess/ModalSuccess';
import { editArtikel } from '../../store/artikelSlice';
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

    // Ambil artikel berdasarkan ID
    const articles = useSelector((state) => state.artikel.articles);
    const articleToEdit = articles.find(article => article.id === parseInt(id));

    useEffect(() => {
        if (articleToEdit) {
            setTitle(articleToEdit.title);
            setAuthor(articleToEdit.author);
            setDate(articleToEdit.date);
            setImage(articleToEdit.image);
            setContent(articleToEdit.content);
        } else {
            // Jika artikel tidak ditemukan, bisa diarahkan ke halaman lain atau tampilkan pesan
            navigate('/admin/kelola-artikel');
        }
    }, [articleToEdit, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedArticle = {
            id: articleToEdit.id, // Tetapkan ID artikel yang sama
            title,
            author,
            date,
            image,
            content
        };

        dispatch(editArtikel(editedArticle));
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-artikel');
    };

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
                                            onChange={(e) => setImage(e.target.value)}
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
