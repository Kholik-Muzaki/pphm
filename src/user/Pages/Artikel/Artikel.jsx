import { useEffect, useState } from "react"
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton"
import BannerPage from "../../Component/BannerPage/BannerPage"
import CardArtikel from "../../Component/CardArtikel/CardArtikel"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { useDispatch, useSelector } from "react-redux"
import { getArticle } from "../../../admin/store/artikelSlice"

const Artikel = () => {
    const { articles, status, error } = useSelector((state) => state.artikel);
    const dispatch = useDispatch();
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (status === "idle") {
            dispatch(getArticle())

        }
    }, [dispatch, status]);

    if (status === "loading") {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    if (status === "failed") {
        return (
            <div className="alert alert-danger">
                <h4>Terjadi Kesalahan:</h4>
                <p>{error}</p>
            </div>
        );
    }

    const artikelToShow = showAll ? articles : articles.slice(0, 6);
    return (
        <>
            <Navbar2 />
            <BannerPage label="Artikel" />
            <CardArtikel data={artikelToShow} />
            <div className="row d-flex justify-content-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn button-show-more"
                >
                    {showAll ? "Tampilkan lebih sedikit" : "Tampilkan Lainnya"}
                </button>
            </div>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default Artikel