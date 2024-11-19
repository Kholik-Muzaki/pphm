import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAlbum } from "../../store/fotoSlice";
import ModalSuccess from "../../Component/ModalSuccess/ModalSuccess";

const EditFoto = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const FotoList = useSelector((state) => state.foto.albums);
    const albumToEdit = FotoList.find((album) => album.id === parseInt(id));

    useEffect(() => {
        if (albumToEdit) {
            setTitle(albumToEdit.title);
            setDescription(albumToEdit.description);
            setImages(albumToEdit.images);
        } else {
            navigate('/admin/kelola-foto');
        }
    }, [albumToEdit, navigate]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    resolve({ src: reader.result }); // Store the base64 string in an object
                };
                reader.onerror = reject;
            });
        });

        Promise.all(newImages).then((imageList) => {
            setImages((prevImages) => [...prevImages, ...imageList]); // Add all new images to state
        }).catch((error) => {
            console.error("Error converting files to base64:", error);
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const editedAlbum = {
            id: albumToEdit.id,
            title,
            description,
            images
        };
        dispatch(editAlbum(editedAlbum));
        setIsModalVisible(true);
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
                                            onChange={handleImageChange}
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

