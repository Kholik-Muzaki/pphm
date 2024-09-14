import { useEffect } from "react"
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton"
import BannerPage from "../../Component/BannerPage/BannerPage"
import CardArtikel from "../../Component/CardArtikel/CardArtikel"
import Footer from "../../Component/Footer/Footer"
import Navbar2 from "../../Component/Navbar/Navbar2"
import { artikelData } from "../../data"
import axios from "axios"

const Artikel = () => {
    // const [artikelData, setArtikelData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://d5f9-36-73-33-146.ngrok-free.app/artikel');
    //             setArtikelData(response.data);
    //             setIsLoading(false);
    //         }
    //         catch (error) {
    //             setError(error);
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchData();

    // }, []);

    // if (isLoading) {
    //     return <p>Loading...</p>; // Tampilan loading saat data masih diambil
    // }

    // if (error) {
    //     return <p>{error}</p>; // Tampilan error jika terjadi masalah
    // }

    return (
        <>
            <Navbar2 />
            <BannerPage label="Artikel" />
            <CardArtikel data={artikelData} />
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default Artikel