import "./ProfilHome.css";
import pengasuh from "../../assets/Image/pengasuh.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProfilHome = () => {
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <>
         <div data-aos="fade-up" data-aos-duration="2000">
            <div className="container mt-5">
               <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 order-sm-1 order-md-1 order-lg-1 d-flex justify-content-center align-items-center">
                     <img
                        src={pengasuh}
                        className="image-pengasuh"
                        alt="" />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 order-sm-2 order-md-2 order-lg-2">
                     <h2 className="h2-profil-home">Profil Pengasuh</h2>
                     <hr />
                     <p>
                        KH. Ahmad Maulana merupakan pengasuh Pondok Pesantren Al-Hikmah yang telah berdedikasi dalam dunia pendidikan Islam selama lebih dari 30 tahun. Dengan pengalaman yang luas dalam membina santri, beliau berperan aktif dalam menyebarkan ajaran Islam yang rahmatan lil alamin dan membimbing santri-santrinya menjadi insan yang berakhlak mulia.

                        Latar belakang pendidikan beliau mencakup pendidikan formal di dalam dan luar negeri, termasuk studi keislaman di Universitas Al-Azhar, Mesir. Selain itu, beliau juga aktif sebagai tokoh ulama dalam berbagai forum dakwah internasional dan memiliki komitmen untuk membangun generasi muda muslim yang berkualitas.
                     </p>
                     <Link to='/profil-pengasuh' className="text-decoration-none">
                        <button className="btn d-flex justify-content-center align-items-center flex-row btn-profil">
                           Baca Selengkapnya
                           <i className='bx bx-right-arrow-alt bx-sm text-decoration-none ms-2 bx-profil'></i>
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div data-aos="fade-up" data-aos-duration="2000">
            <div className="container mt-5">
               <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 order-sm-2 order-md-2 order-lg-1">
                     <h2 className="h2-profil-home">Profil Pesantren</h2>
                     <hr />
                     <p>
                        Pesantren Al-Hikmah didirikan pada tahun 1980 oleh KH. Ahmad Maulana dengan tujuan untuk memberikan pendidikan agama yang komprehensif kepada generasi muda. Seiring waktu, pesantren ini berkembang menjadi salah satu lembaga pendidikan Islam terkemuka, dengan ribuan santri dari seluruh Indonesia.

                        Dengan motto "Membangun Generasi Qurani", Pesantren Al-Hikmah terus berinovasi dalam mengembangkan kurikulum yang seimbang antara pendidikan agama dan umum, serta memberikan fasilitas yang mendukung perkembangan santri.
                     </p>
                     <Link to='/profil-pesantren' className="text-decoration-none">
                        <button className="btn d-flex justify-content-center align-items-center flex-row btn-profil">
                           Baca Selengkapnya
                           <i className='bx bx-right-arrow-alt bx-sm text-decoration-none ms-2 bx-profil'></i>
                        </button>
                     </Link>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 order-sm-1 order-md-1 order-lg-2 d-flex justify-content-center align-items-center">
                     <img
                        src={pengasuh}
                        className="image-pengasuh ms-0"
                        alt="" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProfilHome;
