import { useDispatch, useSelector } from "react-redux"
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton"
import BannerPage from "../../Component/BannerPage/BannerPage"
import CardBerita from "../../Component/CardBerita/CardBerita"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { useEffect, useState } from "react"
import { getBerita } from "../../../admin/store/beritaSlice"

const Berita = () => {
    const { dataBerita, status, error } = useSelector((state) => state.berita);
    const dispatch = useDispatch()
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (status === "idle") {
            dispatch(getBerita())
        }
    }, [dispatch, status])

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

    const beritaToShow = showAll ? dataBerita : dataBerita.slice(0, 6);

    return (
        <>
            <Navbar2 />
            <BannerPage label="Berita" />
            <CardBerita data={beritaToShow} />
            <div className="row d-flex justify-content-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn button-show-more">
                    {showAll ? "Tampilkan lebih sedikit" : "Tampilkan Lainnya"}
                </button>
            </div>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default Berita