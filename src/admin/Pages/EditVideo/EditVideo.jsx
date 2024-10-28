import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { editVideo } from "../../store/videoSlice";
import ModalSuccess from "../../Component/ModalSuccess/ModalSuccess";

const EditVideo = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [judul, setJudul] = useState('');
    const [link, setLink] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    // ambil video berdasarkan id
    const videoList = useSelector((state) => state.video.videos);
    const videoToEdit = videoList.find(video => video.id === parseInt(id));

    useEffect(() => {
        if (videoToEdit) {
            setJudul(videoToEdit.judul);
            setLink(videoToEdit.link);
        } else {
            navigate('/admin/kelola-video');
        }
    }, [videoToEdit, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedVideo = {
            id: videoToEdit.id,
            judul,
            link
        };
        dispatch(editVideo(editedVideo));
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-video');
    }

    return (
        <Layout titlePage="Edit Video">
            <div className="container form-container">
                <div className="row justify-content-center row-form-add">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Buat Video Baru</h4>
                            </div>
                            <div className="card-body card-body-add">
                                <form onSubmit={handleSubmit} className='form-add-artikel'>
                                    <div className="form-group">
                                        <label htmlFor="title" className='text-dark fw-bold'>Judul Video :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="judul"
                                            value={judul}
                                            onChange={(e) => setJudul(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="author" className='text-dark fw-bold'>Link Video:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="link"
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="text-center mt-3 d-flex gap-3">
                                        <button type="submit" className="btn btn-success">
                                            Simpan Video
                                        </button>
                                        <button type="button" className="btn btn-secondary ml-3" onClick={() => navigate('/admin/kelola-video')}>
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
                    description={'Artikel Berhasil Diperbarui'} />
            )}
        </Layout>
    )
}

export default EditVideo;