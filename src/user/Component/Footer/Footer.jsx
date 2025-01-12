import "./Footer.css";
import image from "../../../Image";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="container-fluid mt-5">
         <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
            {/* Section Social Media */}
            <section className="d-flex justify-content-between p-4 footer-section-1" style={{ backgroundColor: "#FEB941" }}>
               <div className="me-5">
                  <span>Terhubung dengan kami melalui media sosial:</span>
               </div>
               <div>
                  <Link to="#" className="text-white me-4">
                     <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#" className="text-white me-4">
                     <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#" className="text-white me-4">
                     <i className="fab fa-google" />
                  </Link>
                  <Link to="#" className="text-white me-4">
                     <i className="fab fa-instagram" />
                  </Link>
                  <Link to="#" className="text-white me-4">
                     <i className="fab fa-linkedin" />
                  </Link>
                  <Link to="#" className="text-white me-4">
                     <i className="fab fa-github" />
                  </Link>
               </div>
            </section>

            {/* Section Main Footer Content */}
            <section className="footer-section-2">
               <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                     {/* About Section */}
                     <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        <img src={image.logo} alt="logo pphm" height="100px" className="mt-0" />
                        <p className="text">
                           Pondok Pesantren Hidayatul Mubtadi'ien berdiri sejak tahun 1995 di Purwokerto Selatan, Banyumas. Dengan visi membentuk generasi beriman, bertakwa, dan berakhlak mulia, kami berkomitmen memberikan pendidikan Islam yang komprehensif dan berkualitas bagi seluruh santri.
                        </p>
                     </div>

                     {/* Link Website */}
                     <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold h6-footer">Link Website</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }} />
                        <p><Link to="/" className="text-white">Home</Link></p>
                        <p><Link to="/profil-pesantren" className="text-white">Profil Pesantren</Link></p>
                        <p><Link to="/profil-pengasuh" className="text-white">Profil Pengasuh</Link></p>
                        <p><Link to="/artikel" className="text-white">Artikel</Link></p>
                        <p><Link to="/berita" className="text-white">Berita</Link></p>
                        <p><Link to="/kontak" className="text-white">Kontak</Link></p>
                     </div>

                     {/* Contact Section */}
                     <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold h6-footer">Kontak</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }} />
                        <p><i className="fas fa-home mr-3" /><br /> Jl. Inpres, Bersole, Purwokerto Selatan, Banyumas, Jawa Tengah</p>
                        <p><i className="fas fa-envelope mr-3" /><br /> hidayatulmubtadiien087@gmail.com</p>
                        <p><i className="fas fa-phone mr-3" /> <br /> +62 822-1199-4651</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* Copyright Section */}
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
               © 2025 Hak Cipta
               <Link to="/" className="text-white ms-1">Pondok Pesantren Hidayatul Mubtadi'ien</Link>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
