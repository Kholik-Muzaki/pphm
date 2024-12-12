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
                  Berdiri kokoh sejak 1995, Pondok Pesantren Hidayatul Mubtadi’ien adalah sebuah lembaga pendidikan Islam yang telah memberikan kontribusi besar dalam membentuk generasi muda yang berilmu, beriman, dan berakhlak mulia. Berlokasi di Jl. Inpres, Bersole, Karangpucung, Kec. Purwokerto Selatan, Kab. Banyumas, Jawa Tengah, pesantren ini menjadi rumah kedua bagi para santri yang ingin mendalami ilmu agama dan mempersiapkan diri untuk masa depan.

Didirikan oleh K.H. Nururrohman setelah menyelesaikan pendidikan di Pondok Pesantren Lirboyo, Kediri, pesantren ini dibangun atas dasar semangat pengabdian dan keinginan kuat untuk membina generasi muda melalui pendidikan Islam yang komprehensif. Sejak awal berdirinya, Pondok Pesantren Hidayatul Mubtadi’ien konsisten mengajarkan nilai-nilai Islam rahmatan lil ‘alamin, dengan kurikulum yang seimbang antara ilmu agama, akhlak, dan wawasan luas tentang kehidupan.

Pesantren ini bukan hanya tempat untuk belajar, tetapi juga tempat untuk membentuk karakter. Setiap santri dibimbing untuk menjadi pribadi yang jujur, amanah, berdisiplin, dan memiliki semangat untuk membangun bangsa. Dengan suasana yang penuh kedamaian, nilai-nilai kebersamaan, dan pengajaran yang mendalam, Pondok Pesantren Hidayatul Mubtadi’ien terus melahirkan generasi Qurani yang siap menghadapi tantangan zaman.

Di sini, para santri tidak hanya menghafal kitab, tetapi juga belajar tentang kehidupan, tanggung jawab, dan kontribusi positif untuk masyarakat. Dengan bimbingan dari para pengasuh yang penuh dedikasi, pesantren ini menjadi cahaya penerang dan tempat bersemi harapan untuk masa depan umat.

Pondok Pesantren Hidayatul Mubtadi’ien: Menginspirasi, mendidik, dan mempersiapkan generasi yang siap membawa perubahan.
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
