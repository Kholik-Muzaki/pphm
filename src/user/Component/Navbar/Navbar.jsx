import React, { useState, useEffect } from "react";
import Logo from "../../assets/Image/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         if (scrollPosition > 0) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <nav className={`navbar fixed-top navbar-dark navbar-expand-lg ${isScrolled ? "bg-body-tertiary" : ""} ${isScrolled ? "scrolled" : ""}`} data-bs-theme="dark">
         <div className="container d-flex">
            <div className="left">
               <Link to={'/'} className="navbar-brand">
                  <img src={Logo} alt="Logo PPHM" className="image-logo" />
               </Link>
            </div>
            <div className="right">
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link to={'/home'} className="nav-link active" aria-current="page">
                           Beranda
                        </Link>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Profil
                        </a>
                        <ul className="dropdown-menu">
                           <li>
                              <Link to={'/profil-pesantren'} className="dropdown-item">
                                 Profil Pesantren
                              </Link>
                           </li>
                           <li>
                              <Link to={'/profil-pengasuh'} className="dropdown-item">
                                 Profil Pengasuh
                              </Link>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <Link to={'/artikel'} className="nav-link">
                           Artikel
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to={'/berita'} className="nav-link">
                           Berita
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to={'/galeri-foto-video'} className="nav-link">
                           Galeri
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to={'/kontak'} className="nav-link">
                           Kontak
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
