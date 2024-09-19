import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton"
import BannerPage from "../../Component/BannerPage/BannerPage"
import Footer from "../../Component/Footer/Footer"
import GaleriFoto from "../../Component/Galeri/GaleriFoto"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { albums } from "../../data"


const GaleriFotoVideo = () => {
    return (
        <>
            <Navbar2 />
            <BannerPage label="Galeri Foto Video" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="fw-bold text-center text-danger">Galeri Foto</h1>
                        <hr />
                    </div>
                </div>
            </div>
            {albums.map((album, index) => (
                <GaleriFoto key={index} album={album} index={index} />
            ))}
            <Footer />
            <BackToTopButton />

        </>
    )
}

export default GaleriFotoVideo