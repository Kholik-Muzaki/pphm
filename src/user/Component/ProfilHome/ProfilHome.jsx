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
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit minima sed culpa nesciunt? Quia sequi aliquam et aperiam illum dolores quasi, molestias iusto similique placeat esse expedita nemo numquam, sapiente doloremque. Facere incidunt ullam totam corrupti voluptas mollitia praesentium necessitatibus esse ipsa? Velit nulla officiis tempora harum sequi optio laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est itaque hic, soluta maxime minima repellat magni tempora molestias impedit laudantium quas blanditiis ducimus at. Veniam ad numquam fuga sed. Culpa suscipit repellat dolorum accusantium, enim, in a libero blanditiis sequi cum eligendi autem eos ab ipsa nisi delectus iusto.</p>
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
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit minima sed culpa nesciunt? Quia sequi aliquam et aperiam illum dolores quasi, molestias iusto similique placeat esse expedita nemo numquam, sapiente doloremque. Facere incidunt ullam totam corrupti voluptas mollitia praesentium necessitatibus esse ipsa? Velit nulla officiis tempora harum sequi optio laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est itaque hic, soluta maxime minima repellat magni tempora molestias impedit laudantium quas blanditiis ducimus at. Veniam ad numquam fuga sed. Culpa suscipit repellat dolorum accusantium, enim, in a libero blanditiis sequi cum eligendi autem eos ab ipsa nisi delectus iusto.</p>
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
