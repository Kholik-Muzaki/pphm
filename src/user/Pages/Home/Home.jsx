import Alamat from "../../Component/Alamat/Alamat";
import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import HeaderMenu from "../../Component/Caraousel/HeaderMenu";
import FasilitasPesantren from "../../Component/FasilitasPesantren/FasilitasPesantren";
import Footer from "../../Component/Footer/Footer";
// import Galeri from "../../Component/Galeri/Galeri";
import Navbar2 from "../../Component/Navbar/Navbar2";
import ProfilHome from "../../Component/ProfilHome/ProfilHome";
import ProgramUnggulan from "../../Component/ProgramUnggulan/ProgramUnggulan";
import Quote from "../../Component/Quote/Quote";
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
         <FasilitasPesantren />
         <ProgramUnggulan />
         <Quote />
         <Alamat alamat="Alamat" />
         <Footer />
         <BackToTopButton />
      </>
   );
};
export default Home;
