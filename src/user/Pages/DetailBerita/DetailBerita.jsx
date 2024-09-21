import { useParams } from "react-router-dom";
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import BannerPage from "../../Component/BannerPage/BannerPage"
import Footer from "../../Component/Footer/Footer"
import { dataBerita } from "../../data";
import Navbar2 from "../../Component/Navbar/Navbar2";
import './DetailBerita.css';

const DetailBerita = () => {
    const { id } = useParams();
    const berita = dataBerita.find(item => item.id === parseInt(id));

    if (!berita) {
        return <h1>Berita Tidak Ditemukan!</h1>
    }
    return (
        <>
            <Navbar2 />
            <BannerPage label={berita.title} />
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <img src={berita.image} alt={berita.title} className="img-fluid mb-4" />
                        <h1 className="fw-bold h1-title-detail">{berita.title}</h1>
                        <p className="mt-3">{berita.text}</p>
                        <p><strong>Author: </strong>{berita.author}</p>
                        <p><strong>Date: </strong>{berita.date}</p>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default DetailBerita;