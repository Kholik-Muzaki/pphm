import BannerPage from "../../Component/BannerPage/BannerPage";
import KontakInfo from "../../Component/KontakInfo/KontakInfo";
import Footer from "../../Component/Footer/Footer";
import Alamat from "../../Component/Alamat/Alamat";
import Navbar2 from "../../Component/Navbar/Navbar2";
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";

const Kontak = () => {
    return (
        <>
            <Navbar2 />
            <BannerPage label="Kontak" />
            <KontakInfo />
            <Alamat />
            <Footer />
            <BackToTopButton />
        </>
    );
};

export default Kontak;
