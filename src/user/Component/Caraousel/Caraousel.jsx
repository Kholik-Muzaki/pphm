import image from "../../../Image";
import "./Caraousel.css";

const Caraousel = () => {
   return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={image.banner1} className="d-block w-100" alt="..." />
               <div className="carousel-caption fade-in-bottom">
                  <h1 className="text-center fw-bold">
                     Pondok Pesantren <br />
                     Hidayatul Mubatadi'ien
                  </h1>
                  <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at et, officiis doloremque amet praesentium numquam similique hic officia architecto ducimus, consectetur modi laboriosam optio odit temporibus distinctio beatae perferendis.</p>
               </div>
            </div>
            <div className="carousel-item">
               <img src={image.banner2} className="d-block w-100" alt="..." />
               <div className="carousel-caption fade-in-bottom">
                  <h1 className="text-center fw-bold">
                     Pondok Pesantren <br />
                     Hidayatul Mubatadi'ien
                  </h1>
                  <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at et, officiis doloremque amet praesentium numquam similique hic officia architecto ducimus, consectetur modi laboriosam optio odit temporibus distinctio beatae perferendis.</p>
               </div>
            </div>
            <div className="carousel-item">
               <img src={image.banner3} className="d-block w-100" alt="..." />
               <div className="carousel-caption fade-in-bottom">
                  <h1 className="text-center fw-bold">
                     Pondok Pesantren <br />
                     Hidayatul Mubatadi'ien
                  </h1>
                  <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at et, officiis doloremque amet praesentium numquam similique hic officia architecto ducimus, consectetur modi laboriosam optio odit temporibus distinctio beatae perferendis.</p>
               </div>
            </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="visually-hidden">Next</span>
         </button>
      </div>
      
   );
};

export default Caraousel;
