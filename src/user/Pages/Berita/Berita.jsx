import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton"
import BannerPage from "../../Component/BannerPage/BannerPage"
import CardBerita from "../../Component/CardBerita/CardBerita"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { dataBerita } from "../../data"

const Berita = () => {
    return (
        <>
            <Navbar2 />
            <BannerPage label="Berita" />
            <CardBerita data={dataBerita} />
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default Berita