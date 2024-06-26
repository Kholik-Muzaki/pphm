import BannerPage from "../../Component/BannerPage/BannerPage"
import Footer from "../../Component/Footer/Footer"
import AlbumKegiatanHarian from "../../Component/Galeri/AlbumKegiatanHarian"
import FotoFasilitasPesantren from "../../Component/Galeri/FotoFasilitasPesantren"
import GaleriAcaraKhusus from "../../Component/Galeri/GaleriAcaraKhusus"
import Navbar from "../../Component/Navbar/Navbar"

const GaleriFotoVideo = () => {
    return (
        <>
            <Navbar />
            <BannerPage label="Galeri Foto Video" />
            {/* Album kegiatan harian */}
            <h2>Album Kegiatan Harian</h2>
            <AlbumKegiatanHarian />

            {/* Galeri Acara Khusus */}
            <h2>Galeri Acara Khusus</h2>
            <GaleriAcaraKhusus />

            {/* Foto Fasilitas Pesantren */}
            <h2>Foto  Fasilitas Pesantren</h2>
            <FotoFasilitasPesantren />

            <Footer />

        </>
    )
}

export default GaleriFotoVideo