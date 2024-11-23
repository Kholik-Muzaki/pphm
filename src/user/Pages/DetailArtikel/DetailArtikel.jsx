import { useParams } from "react-router-dom";
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import BannerPage from "../../Component/BannerPage/BannerPage"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2";
import './DetailArtikel.css';
import { useSelector } from "react-redux";

const DetailArtikel = () => {
    const { id } = useParams();
    const articles = useSelector((state) => state.artikel.articles)
    const artikel = articles.find(item => item.id === parseInt(id));

    if (!artikel) {
        // Jika artikel tidak ditemukan
        return (
            <div>
                <Navbar2 />
                <h1 className="text-center mt-5">Artikel Tidak Ditemukan!</h1>
                <Footer />
            </div>
        );
    }
    return (
        <>
            <Navbar2 />
            <BannerPage label={artikel.title} />
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <img src={artikel.image} alt={artikel.title} className="img-fluid image-detail" />
                        <h1 className="fw-bold h1-title-detail">{artikel.title}</h1>
                        <p className="mt-3">{artikel.content}</p>
                        <p><strong>Author: </strong>{artikel.author}</p>
                        <p><strong>Date: </strong>{artikel.date}</p>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default DetailArtikel;