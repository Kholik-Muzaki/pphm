import Alamat from "../../Component/Alamat/Alamat";
import Caraousel from "../../Component/Caraousel/Caraousel";
import HeaderMenu from "../../Component/Caraousel/HeaderMenu";
import Footer from "../../Component/Footer/Footer";
// import Galeri from "../../Component/Galeri/Galeri";
import Navbar2 from "../../Component/Navbar/Navbar2";
import ProfilHome from "../../Component/ProfilHome/ProfilHome";
import SelayangPandang from "../../Component/SelayangPandang/SelayangPandang";

const Home = () => {
   return (
      <>
         <Navbar2 />
         {/* <Caraousel /> */}
         <HeaderMenu />
         <ProfilHome />
         <SelayangPandang />
         {/* <Galeri /> */}
         <Alamat alamat="Alamat" />
         <Footer />
      </>
   );
};
export default Home;
