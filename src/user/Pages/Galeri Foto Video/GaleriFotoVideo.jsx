import './GaleriFotoVideo.css';
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton"
import BannerPage from "../../Component/BannerPage/BannerPage"
import Footer from "../../Component/Footer/Footer"
import GaleriFoto from "../../Component/GaleriFoto/GaleriFoto"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { albums } from "../../data"
import { useState } from 'react';
import GaleriVideo from '../../Component/GaleriVideo/GaleriVIdeo';


const GaleriFotoVideo = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggleAlbums = () => {
        setShowAll(!showAll);
    };

    const displayedAlbums = showAll ? albums : albums.slice(0, 2);

    return (
        <>
            <Navbar2 />
            <BannerPage label="Galeri Foto Video" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="fw-bold text-center text-galeri-foto">Galeri Foto</h1>
                        <hr />
                    </div>
                </div>
            </div>
            {displayedAlbums.map((album, index) => (
                <GaleriFoto key={index} album={album} index={index} />
            ))}

            <div className="container text-center mt-4">
                <button className="btn button-show-more" onClick={handleToggleAlbums}>
                    {showAll ? "Tampilkan Lebih Sedikit >>" : "Tampilkan Lainnya >>"}
                </button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="fw-bold text-center text-galeri-foto">Galeri Video</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <GaleriVideo />
            <Footer />
            <BackToTopButton />

        </>
    )
}

export default GaleriFotoVideo