import React, { useState, useRef, useEffect } from 'react';
import Layout from "../../Layout/Layout";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './EditBerita.css';
import ModalSuccess from '../../Component/ModalSuccess/ModalSuccess';
import { editBerita } from '../../store/beritaSlice';

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
    const beritaList = useSelector((state) => state.berita.dataBerita);
    const beritaToEdit = beritaList.find(berita => berita.id === parseInt(id));

    useEffect(() => {
        if (beritaToEdit) {
            setTitle(beritaToEdit.title);
            setAuthor(beritaToEdit.author);
            setDate(beritaToEdit.date);
            setImage(beritaToEdit.image);
            setContent(beritaToEdit.content);
        } else {
            navigate('/admin/kelola-berita');
        }
    }, [beritaToEdit, navigate]);

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Store the base64 string
            };
            reader.readAsDataURL(file); // Convert the file to base64
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedBerita = {
            id: beritaToEdit.id,
            title,
            author,
            date,
            image,
            content
        };

        dispatch(editBerita(editedBerita));
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-berita');
    };

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
                                            onChange={handleImageChange}
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
