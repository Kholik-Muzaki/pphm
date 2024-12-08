import { useParams } from "react-router-dom";
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import BannerPage from "../../Component/BannerPage/BannerPage"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2";
import './DetailArtikel.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtikelById } from "../../../admin/store/artikelSlice";

const DetailArtikel = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { artikelDetail, status, error } = useSelector((state) => state.artikel);

    useEffect(() => {
        if (id) {
            dispatch(getArtikelById(id));
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

    if (!artikelDetail) {
        // Jika artikel tidak ditemukan
        return (
            <div>
                <Navbar2 />
                <BannerPage label="Artikel Tidak Ditemukan" />
                <h1 className="text-center mt-5">Artikel Tidak Ditemukan!</h1>
                <Footer />
            </div>
        );
    }
    return (
        <>
            <Navbar2 />
            <BannerPage label={artikelDetail.title} />
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <img src={`http://localhost:3000/${artikelDetail.image}`} alt={artikelDetail.title} className="img-fluid image-detail" />
                        <h1 className="fw-bold h1-title-detail">{artikelDetail.title}</h1>
                        <p className="mt-3">{artikelDetail.content}</p>
                        <p><strong>Author: </strong>{artikelDetail.author}</p>
                        <p><strong>Date: </strong>{artikelDetail.date}</p>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default DetailArtikel;