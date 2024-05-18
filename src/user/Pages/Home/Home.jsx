import Alamat from "../../Component/Alamat/Alamat";
import Caraousel from "../../Component/Caraousel/Caraousel";
import Footer from "../../Component/Footer/Footer";
// import Galeri from "../../Component/Galeri/Galeri";
import Navbar from "../../Component/Navbar/Navbar";
import ProfilHome from "../../Component/ProfilHome/ProfilHome";
import SelayangPandang from "../../Component/SelayangPandang/SelayangPandang";

const Home = () => {
   return (
      <>
         <Navbar />
         <Caraousel />
         <ProfilHome />
         <SelayangPandang />
         {/* <Galeri /> */}
         <Alamat alamat="Alamat" />
         <Footer />
      </>
   );
};
export default Home;
