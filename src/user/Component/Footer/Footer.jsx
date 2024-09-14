import "./Footer.css";
import image from "../../../Image";

const Footer = () => {
   return (
      <div className="container-fluid mt-5">
         <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
            <section className="d-flex justify-content-between p-4 footer-section-1" style={{ backgroundColor: "#FEB941" }}>
               <div className="me-5">
                  <span>Get connected with us on social networks:</span>
               </div>
               <div>
                  <a href="" className="text-white me-4">
                     <i className="fab fa-facebook-f" />
                  </a>
                  <a href="" className="text-white me-4">
                     <i className="fab fa-twitter" />
                  </a>
                  <a href="" className="text-white me-4">
                     <i className="fab fa-google" />
                  </a>
                  <a href="" className="text-white me-4">
                     <i className="fab fa-instagram" />
                  </a>
                  <a href="" className="text-white me-4">
                     <i className="fab fa-linkedin" />
                  </a>
                  <a href="" className="text-white me-4">
                     <i className="fab fa-github" />
                  </a>
               </div>
            </section>
            <section className="footer-section-2">
               <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                     <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        <img src={image.logo} alt="logo pphm" height="100px" className="mt-0" />
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequuntur nobis debitis. Quaerat est beatae autem atque sint, similique ullam dolor delectus provident accusantium adipisci voluptatem veritatis dolorum ab cumque.</p>
                     </div>
                     <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold h6-footer">Link Website</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }} />
                        <p>
                           <a href="#!" className="text-white">
                              Home
                           </a>
                        </p>
                        <p>
                           <a href="#!" className="text-white">
                              Profil Pesantren
                           </a>
                        </p>
                        <p>
                           <a href="#!" className="text-white">
                              Profil Pengasuh
                           </a>
                        </p>
                        <p>
                           <a href="#!" className="text-white">
                              Artikel
                           </a>
                        </p>
                        <p>
                           <a href="#!" className="text-white">
                              Berita
                           </a>
                        </p>
                        <p>
                           <a href="#!" className="text-white">
                              Kontak
                           </a>
                        </p>
                     </div>
                     <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold h6-footer">Link Terkait</h6>
                        <hr className="mb-4 mt-0 d-inline-blocFk mx-auto" style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }} />
                        <p>
                           <a href="#!" className="text-white">
                              Kemenag RI
                           </a>
                        </p>
                        <p>
                           <a href="#!" className="text-white">
                              NU Online
                           </a>
                        </p>
                        <p>
                           <a href="#!" className="text-white">
                              Pesantren ID
                           </a>
                        </p>
                        <p>
                           <a href="#!" className="text-white">
                              Santri Jateng ID
                           </a>
                        </p>
                     </div>
                     <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold h6-footer">Kontak</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }} />
                        <p>
                           <i className="fas fa-home mr-3" /> Purwokerto Selatan, Banyumas
                        </p>
                        <p>
                           <i className="fas fa-envelope mr-3" /> pphm@gmail.com
                        </p>
                        <p>
                           <i className="fas fa-phone mr-3" /> + 01 234 567 88
                        </p>
                        <p>
                           <i className="fas fa-print mr-3" /> + 01 234 567 89
                        </p>
                     </div>
                  </div>
               </div>
            </section>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
               © 2024 Copyright <span></span>
               <a className="text-white" href="">
                  Pondok Pesantren Hidayatul Mubtadi'ien
               </a>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
