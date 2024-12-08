import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalSuccess from "../../Component/ModalSuccess/ModalSuccess";
import { editVideo, getVideoById, resetStatus } from "../../store/videoSlice";

const EditVideo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { videoDetail, status, error } = useSelector((state) => state.video);
    const [judul, setJudul] = useState('');
    const [link, setLink] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    // fetxhing data by id
    useEffect(() => {
        if (id) {
            dispatch(getVideoById(id))
        }
    }, [id, dispatch]);

    // mengisi form setelah data diambil dari params
    useEffect(() => {
        if (videoDetail) {
            setJudul(videoDetail.judul);
            setLink(videoDetail.link);
        }
    }, [videoDetail]);

    // handle Sumbit update
    const handleSubmit = (e) => {
        e.preventDefault();

        const editedVideo = {
            judul,
            link
        };

        dispatch(editVideo({ id, videoData: editedVideo }))
            .unwrap()
            .then(() => {
                setIsModalVisible(true);
                dispatch(resetStatus());
            })
            .catch((err) => {
                alert(`Gagal mengedit video: ${err.message}`)
            })
    };

    // pengkondisian state
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