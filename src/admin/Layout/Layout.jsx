import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
import image from "../../Image";

const Layout = ({ children, titlePage }) => {
    return (
        <div className="container-fluid container-main-layout">
            <div className="row">
                <div className="col-auto bg-light sidebar-menu d-flex justify-content-center">
                    <div className="icon-sidebar">
                        <section className="section-logo mb-3">
                            <img src={image.logo2} alt="" className="image-logo" />
                        </section>
                        {/* section main */}
                        <section className="section-main mb-3">
                            <p className="p-section-main">Main</p>

                            <div className="logo-sidebar">
                                <Link to="/admin">
                                    <img src={image.dashboard} alt="" className="img-logo" />
                                </Link>
                            </div>
                            <div className="logo-sidebar">
                                <Link to='/admin/kelola-artikel'>
                                    <img src={image.artikel} alt="" className="img-logo" />
                                </Link>
                            </div>
                            <div className="logo-sidebar">
                                <Link to="/admin/kelola-berita">
                                    <img src={image.berita2} alt="" className="img-logo" />
                                </Link>
                            </div>
                            <div className="logo-sidebar">
                                <Link to="/admin/kelola-foto">
                                    <img src={image.photo} alt="" className="img-logo" />
                                </Link>
                            </div>
                            <div className="logo-sidebar">
                                <Link to="/admin/kelola-video">
                                    <img src={image.video} alt="" className="img-logo" />
                                </Link>
                            </div>
                        </section>
                        <hr />

                        {/* section more */}
                        <section className="section-main mb-2">
                            <p className="p-section-main">More</p>
                            <div className="logo-sidebar">
                                <Link to="/pengaturan">
                                    <img src={image.keluar} alt="" className="img-logo" />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="col">
                    <header className="header-menu-layout">
                        {/* Hamburger Button */}
                        <button className="btn button-hamburger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                            <img src={image.hamburger} alt="" />
                        </button>
                        <span className="title-page">{titlePage}</span>
                    </header>
                    <hr style={{ margin: "0px 18px 16px 18px" }} />

                    {/* Offcanvas Sidebar */}
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
                        <div className="offcanvas-header d-flex align-items-center justify-content-start">
                            <section className="section-logo mb-3 d-flex flex-column align-items-center justify-content-center">
                                <img src={image.logo2} alt="" className="image-logo" />
                                <span className="header-logo text-center">Pondok Pesantren Hidayatul Mubtadi'ien</span>
                            </section>
                        </div>
                        <div className="offcanvas-body">
                            {/* Sidebar content inside Offcanvas */}
                            <section className="section-main-offcanvas mb-3">
                                <div className="">
                                    <p className="p-section-main-offcanvas">Main</p>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/admin" className="text-decoration-none text-dark">
                                        <img src={image.dashboard} alt="" className="img-logo" />
                                        <span className="ms-2">Dashboard</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/admin/kelola-artikel" className="text-decoration-none text-dark">
                                        <img src={image.artikel} alt="" className="img-logo" />
                                        <span className="ms-2">Kelola Artikel</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/admin/kelola-berita" className="text-decoration-none text-dark">
                                        <img src={image.berita2} alt="" className="img-logo" />
                                        <span className="ms-2">Kelola Berita</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/admin/kelola-foto" className="text-decoration-none text-dark">
                                        <img src={image.photo} alt="" className="img-logo" />
                                        <span className="ms-2">Kelola Foto</span>
                                    </Link>
                                </div>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/admin/kelola-video" className="text-decoration-none text-dark">
                                        <img src={image.video} alt="" className="img-logo" />
                                        <span className="ms-2">Kelola Video</span>
                                    </Link>
                                </div>
                                <hr />
                            </section>

                            <section className="section-main-offcanvas mb-2">
                                <p className="p-section-main-offcanvas">More</p>
                                <div className="logo-sidebar-offcanvas">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <img src={image.keluar} alt="" className="img-logo" />
                                        <span className="ms-2">Keluar</span>
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="main-content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
