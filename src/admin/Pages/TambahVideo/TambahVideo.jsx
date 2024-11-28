import { useState } from "react";
import ModalSuccess from "../../Component/ModalSuccess/ModalSuccess";
import Layout from "../../Layout/Layout"
// import { addVideo } from "../../store/videoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideo } from "../../store/videoSlice";

const TambahVideo = () => {
    const [judul, setJudul] = useState('');
    const [link, setLink] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newVideo = {
            id: Date.now(),
            judul,
            link
        };
        console.log(newVideo);

        dispatch(addVideo(newVideo))
            .unwrap()
            .then(() => {
                setIsModalVisible(true);
            })
            .catch((error) => {
                alert("Gagal menambahkan video", error);
            })

    }

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/admin/kelola-video');
    }

    return (
        <Layout titlePage="Tambah Artikel">
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
                    description={'Artikel Berhasil Ditambahkan'} />
            )}
        </Layout>
    )
}

export default TambahVideo;