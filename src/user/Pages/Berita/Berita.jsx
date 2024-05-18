import BannerPage from "../../Component/BannerPage/BannerPage"
import CardBerita from "../../Component/CardBerita/CardBerita"
import Footer from "../../Component/Footer/Footer"
import Navbar from "../../Component/Navbar/Navbar"
import { dataBerita } from "../../data"

const Berita = () => {
    return (
        <>
            <Navbar />
            <BannerPage label="Berita" />
            <CardBerita data={dataBerita} />
            <Footer />
        </>
    )
}

export default Berita