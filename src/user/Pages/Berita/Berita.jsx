import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton"
import BannerPage from "../../Component/BannerPage/BannerPage"
import CardBerita from "../../Component/CardBerita/CardBerita"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { dataBerita } from "../../data"
import { useState } from "react"

const Berita = () => {
    const [showAll, setShowAll] = useState(false);

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