import "./ProfilHome.css";
import pengasuh from "../../assets/Image/pengasuh.png";
import santri from "../../assets/Image/santri.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProfilHome = () => {
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <section className="profil-home-section">
         <div className="container profil-home-container">

            {/* Profil Pengasuh */}
            <div className="row mb-5" data-aos="fade-up" data-aos-duration="2000">
               <div className="col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
                  <img src={pengasuh} className="profil-home-image" alt="Pengasuh" />
               </div>
               <div className="col-sm-12 col-lg-6">
                  <h2 className="profil-home-title">Profil Pengasuh</h2>
                  <hr className="profil-home-hr" />
                  <p className="profil-home-text">
                     K.H. Nururrohman adalah sosok ulama yang penuh dedikasi dan kecintaan terhadap dunia pendidikan Islam. Beliau adalah pendiri Pondok Pesantren Hidayatul Mubtadi’ien, sebuah lembaga pendidikan yang kini menjadi salah satu pilar penting dalam membentuk generasi muda berilmu dan berakhlak mulia di Purwokerto Selatan, Banyumas, Jawa Tengah.
                     Lahir dari perjalanan ilmu yang panjang, K.H. Nururrohman menimba ilmu di Pondok Pesantren Lirboyo, Kediri, Jawa Timur, yang terkenal dengan tradisi keilmuan Islam yang kuat dan mendalam. Setelah menyelesaikan pendidikannya pada tahun 1995, beliau mewujudkan cita-citanya untuk mendirikan pesantren sebagai wadah bagi generasi muda untuk belajar, berkembang, dan menjadi insan yang siap membangun agama, bangsa, dan negara.
                  </p>
                  <Link to="/profil-pengasuh" className="text-decoration-none">
                     <button className="profil-home-btn">
                        Baca Selengkapnya
                        <i className="bx bx-right-arrow-alt bx-sm"></i>
                     </button>
                  </Link>
               </div>
            </div>

            {/* Profil Pesantren */}
            <div className="row" data-aos="fade-up" data-aos-duration="2000">
               <div className="col-sm-12 col-lg-6 order-lg-2 d-flex justify-content-center align-items-center">
                  <img src={santri} className="profil-home-image" alt="Pesantren" />
               </div>
               <div className="col-sm-12 col-lg-6 order-lg-1">
                  <h2 className="profil-home-title">Profil Pesantren</h2>
                  <hr className="profil-home-hr" />
                  <p className="profil-home-text">
                     Berdiri kokoh sejak 1995, Pondok Pesantren Hidayatul Mubtadi’ien adalah sebuah lembaga pendidikan Islam yang telah memberikan kontribusi besar dalam membentuk generasi muda yang berilmu, beriman, dan berakhlak mulia. Berlokasi di Jl. Inpres, Bersole, Karangpucung, Kec. Purwokerto Selatan, Kab. Banyumas, Jawa Tengah, pesantren ini menjadi rumah kedua bagi para santri yang ingin mendalami ilmu agama dan mempersiapkan diri untuk masa depan.

                     Didirikan oleh K.H. Nururrohman setelah menyelesaikan pendidikan di Pondok Pesantren Lirboyo, Kediri, pesantren ini dibangun atas dasar semangat pengabdian dan keinginan kuat untuk membina generasi muda melalui pendidikan Islam yang komprehensif. Sejak awal berdirinya, Pondok Pesantren Hidayatul Mubtadi’ien konsisten mengajarkan nilai-nilai Islam rahmatan lil ‘alamin, dengan kurikulum yang seimbang antara ilmu agama, akhlak, dan wawasan luas tentang kehidupan.
                  </p>
                  <Link to="/profil-pesantren" className="text-decoration-none">
                     <button className="profil-home-btn">
                        Baca Selengkapnya
                        <i className="bx bx-right-arrow-alt bx-sm"></i>
                     </button>
                  </Link>
               </div>
            </div>

         </div>
      </section>
   );
};

export default ProfilHome;
