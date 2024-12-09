import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAlbum, getAlbumById } from "../../store/fotoSlice";
import ModalSuccess from "../../Component/ModalSuccess/ModalSuccess";

const EditFoto = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { albumDetail, status, error } = useSelector((state) => state.foto);

    useEffect(() => {
        if (id) {
            dispatch(getAlbumById(id));
        }
    }, [id, dispatch]);

    // megisi form setelah data diambil dari params
    useEffect(() => {
        if (albumDetail) {
            setTitle(albumDetail.title);
            setDescription(albumDetail.description);
            setImages(albumDetail.images);
        }
    }, [albumDetail]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        images.forEach((image) => {
            if (image instanceof File) {
                formData.append('images', image); // Kirim semua file baru dengan field 'images'
            } else if (typeof image === 'object' && image.src) {
                formData.append('existingImages', image.src); // Kirim gambar lama dengan field 'existingImages'
            }
        });

        dispatch(editAlbum({ id, albumData: formData }))
            .unwrap()
            .then(() => {
                setIsModalVisible(true);
            })
            .catch((error) => {
                alert('Gagal mengedit album: ' + (error.response?.data?.message || error.message));
            });
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
    if (status === "failed") {
        return (
            <div className="alert alert-danger">
                <h4>Terjadi Kesalahan:</h4>
                <p>{error}</p>
            </div>
        );
    }

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-foto');
    };


    return (
        <Layout titlePage="Edit Foto">
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
                    description={'Album Berhasil Diperbarui'} />
            )}
        </Layout>
    )
}

export default EditFoto;

