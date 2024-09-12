import BannerPage from "../../Component/BannerPage/BannerPage"
import CardArtikel from "../../Component/CardArtikel/CardArtikel"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { artikelData } from "../../data"

const Artikel = () => {
    return(
        <>
        <Navbar2 />
        <BannerPage label = "Artikel" />
        <CardArtikel data={artikelData}/>
        <Footer />
        </>
    )
}

export default Artikel