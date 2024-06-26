import BannerPage from "../../Component/BannerPage/BannerPage"
import CardArtikel from "../../Component/CardArtikel/CardArtikel"
import Footer from "../../Component/Footer/Footer"
import Navbar from "../../Component/Navbar/Navbar"
import { artikelData } from "../../data"

const Artikel = () => {
    return(
        <>
        <Navbar />
        <BannerPage label = "Artikel" />
        <CardArtikel data={artikelData}/>
        <Footer />
        </>
    )
}

export default Artikel