import BannerPage from "../../Component/BannerPage/BannerPage";
import KontakInfo from "../../Component/KontakInfo/KontakInfo";
import Navbar from "../../Component/Navbar/Navbar";

import Footer from "../../Component/Footer/Footer";
import Alamat from "../../Component/Alamat/Alamat";

const Kontak = () => {
    return (
        <>
            <Navbar />
            <BannerPage label="Kontak" />
            <KontakInfo />
            <Alamat />
            <Footer />
        </>
    );
};

export default Kontak;
