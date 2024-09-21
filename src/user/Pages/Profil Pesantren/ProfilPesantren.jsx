import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import BannerPage from "../../Component/BannerPage/BannerPage";
import FasilitasPesantren from "../../Component/FasilitasPesantren/FasilitasPesantren";
import Footer from "../../Component/Footer/Footer";
import Navbar2 from "../../Component/Navbar/Navbar2";
import ProgramUnggulan from "../../Component/ProgramUnggulan/ProgramUnggulan";
import "./ProfilPesantren.css"; // Import file CSS

const ProfilPesantren = () => {
   return (
      <>
         <Navbar2 />
         <BannerPage label="Profil Pesantren" />
         <div className="container mt-5">
            {/* Bagian Sejarah Pesantren */}
            <div className="row">
               <div className="col-sm-12 text-center">
                  <h3 className="fw-bold mb-4 h3-title-profil">Sejarah Pesantren</h3>
                  <p className="lead">
                     Pesantren Al-Hikmah didirikan pada tahun 1980 oleh KH. Ahmad Maulana dengan tujuan untuk
                     memberikan pendidikan agama yang komprehensif kepada generasi muda. Seiring waktu, pesantren
                     ini berkembang menjadi salah satu lembaga pendidikan Islam terkemuka, dengan ribuan santri dari
                     seluruh Indonesia.
                  </p>
                  <p>
                     Dengan motto <em>"Membangun Generasi Qurani"</em>, Pesantren Al-Hikmah terus berinovasi dalam
                     mengembangkan kurikulum yang seimbang antara pendidikan agama dan umum, serta memberikan
                     fasilitas yang mendukung perkembangan santri.
                  </p>
               </div>
            </div>

            {/* Visi dan Misi */}
            <div className="row mt-5">
               <div className="col-sm-12">
                  <h3 className="fw-bold text-center h3-title-profil">Visi dan Misi</h3>
                  <hr />
                  <div className="vision-mission">
                     <h4 className="fw-bold">Visi:</h4>
                     <p>
                        Mewujudkan generasi muslim yang beriman, bertaqwa, berilmu, dan berakhlak mulia serta siap berkontribusi
                        dalam membangun peradaban Islam yang rahmatan lil 'alamin.
                     </p>
                     <h4 className="fw-bold mt-3">Misi:</h4>
                     <ul>
                        <li>Memberikan pendidikan Islam yang holistik dan menyeluruh.</li>
                        <li>Mengembangkan potensi santri dalam bidang akademik dan keterampilan hidup.</li>
                        <li>Mendidik santri untuk menjadi pemimpin yang bertanggung jawab dan amanah.</li>
                        <li>Menanamkan kecintaan terhadap ilmu pengetahuan dan budaya Islami.</li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* fasilitas Pesantren */}
            <FasilitasPesantren />
            {/* Program Unggulan */}
            <ProgramUnggulan />
         </div>

         <Footer />
         <BackToTopButton />
      </>
   );
};

export default ProfilPesantren;
