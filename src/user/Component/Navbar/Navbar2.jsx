import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';
import Logo from "../../assets/Image/logo.png";

const Navbar2 = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg py-3 py-sm-0">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item py-lg-4">
                                <Link className="nav-link" to="/home">
                                    Beranda
                                </Link>
                            </li>
                            <li className="nav-item dropdown py-lg-4">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Profil
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/profil-pesantren">
                                            Profil Pesantren
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/profil-pengasuh">
                                            Profil Pengasuh
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item py-lg-4">
                                <Link className="nav-link" to="/artikel">
                                    Artikel
                                </Link>
                            </li>
                            <li className="nav-item py-lg-4">
                                <Link className="nav-link" to="/berita">
                                    Berita
                                </Link>
                            </li>
                            <li className="nav-item py-lg-4">
                                <Link className="nav-link" to="/galeri-foto-video">
                                    Galeri
                                </Link>
                            </li>
                            <li className="nav-item py-lg-4">
                                <Link className="nav-link" to="/kontak">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar2;
