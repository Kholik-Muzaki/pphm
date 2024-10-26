import { useParams } from "react-router-dom";
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import BannerPage from "../../Component/BannerPage/BannerPage"
import Footer from "../../Component/Footer/Footer"
import { artikelData } from "../../data";
import Navbar2 from "../../Component/Navbar/Navbar2";
import './DetailArtikel.css';

const DetailArtikel = () => {
    const { id } = useParams();
    const artikel = artikelData.find(item => item.id === parseInt(id));

    if (!artikel) {
        return <h1>Artikel Tidak Ditemukan!</h1>
    }
    return (
        <>
            <Navbar2 />
            <BannerPage label={artikel.title} />
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <img src={artikel.image} alt={artikel.title} className="img-fluid mb-4" />
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