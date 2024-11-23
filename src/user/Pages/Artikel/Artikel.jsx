import { useState } from "react"
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton"
import BannerPage from "../../Component/BannerPage/BannerPage"
import CardArtikel from "../../Component/CardArtikel/CardArtikel"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { useSelector } from "react-redux"


const Artikel = () => {
    const articles = useSelector((state) => state.artikel.articles);
    const [showAll, setShowAll] = useState(false);

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