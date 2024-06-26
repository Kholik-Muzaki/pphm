import "./ProfilHome.css";
import pengasuh from "../../assets/Image/pengasuh.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProfilHome = () => {
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <>
         <div data-aos="fade-up" data-aos-duration="2000">
            <div className="container mt-5">
               <div className="row">
                  <div className="col-6">
                     <img
                        src={pengasuh}
                        className="image-pengasuh"
                        alt="" />
                  </div>
                  <div className="col-6">
                     <h2 className="">Profil Pengasuh</h2>
                     <hr />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit minima sed culpa nesciunt? Quia sequi aliquam et aperiam illum dolores quasi, molestias iusto similique placeat esse expedita nemo numquam, sapiente doloremque. Facere incidunt ullam totam corrupti voluptas mollitia praesentium necessitatibus esse ipsa? Velit nulla officiis tempora harum sequi optio laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est itaque hic, soluta maxime minima repellat magni tempora molestias impedit laudantium quas blanditiis ducimus at. Veniam ad numquam fuga sed. Culpa suscipit repellat dolorum accusantium, enim, in a libero blanditiis sequi cum eligendi autem eos ab ipsa nisi delectus iusto.</p>
                  </div>
               </div>
            </div>
         </div>
         <div data-aos="fade-up" data-aos-duration="2000">
            <div className="container mt-5">
               <div className="row">
                  <div className="col-6">
                     <h2 className="">Profil Pengasuh</h2>
                     <hr />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit minima sed culpa nesciunt? Quia sequi aliquam et aperiam illum dolores quasi, molestias iusto similique placeat esse expedita nemo numquam, sapiente doloremque. Facere incidunt ullam totam corrupti voluptas mollitia praesentium necessitatibus esse ipsa? Velit nulla officiis tempora harum sequi optio laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est itaque hic, soluta maxime minima repellat magni tempora molestias impedit laudantium quas blanditiis ducimus at. Veniam ad numquam fuga sed. Culpa suscipit repellat dolorum accusantium, enim, in a libero blanditiis sequi cum eligendi autem eos ab ipsa nisi delectus iusto.</p>
                  </div>
                  <div className="col-6">
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
