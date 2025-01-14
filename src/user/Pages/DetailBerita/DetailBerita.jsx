import { useParams } from "react-router-dom";
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import BannerPage from "../../Component/BannerPage/BannerPage"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2";
import './DetailBerita.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBeritaById } from "../../../admin/store/beritaSlice";

const DetailBerita = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { beritaDetail, status, error } = useSelector((state) => state.berita);

    useEffect(() => {
        if (id) {
            dispatch(getBeritaById(id))
        }
    }, [id, dispatch]);

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

    if (!beritaDetail) {
        // Jika berita tidak ditemukan
        return (
            <div>
                <Navbar2 />
                <BannerPage label="Berita Tidak Ditemukan" />
                <h1 className="text-center mt-5">Berita Tidak Ditemukan!</h1>
                <Footer />
            </div>
        );
    }
    return (
        <>
            <Navbar2 />
            <BannerPage label={beritaDetail.title} />
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <img src={`https://api.pphmbersole.site/${beritaDetail.image}`} alt={beritaDetail.title} className="img-fluid image-detail" />
                        <h1 className="fw-bold h1-title-detail">{beritaDetail.title}</h1>
                        <p className="mt-3"
                            dangerouslySetInnerHTML={{
                                __html: item.content.slice(0, 100) + '...',
                            }}
                        />
                        <p><strong>Author: </strong>{beritaDetail.author}</p>
                        <p><strong>Date: </strong>{beritaDetail.date}</p>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default DetailBerita;