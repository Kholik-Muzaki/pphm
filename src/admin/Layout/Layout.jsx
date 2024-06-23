import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SidebarItem from "../Component/SideBarItem/SideBarItem";
import "./Layout.css";
import ModalLogout from "../Component/ModalLogout/ModalLogout";
import image from "../../Image";
function Layout({ children, titlePage }) {
    const navigate = useNavigate();

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleLogoutConfirm = () => {
        localStorage.removeItem("token");
        navigate("/");
        setShowLogoutModal(false);
    };

    const handleLogoutCancel = () => {
        setShowLogoutModal(false);
    };

    return (
        <>
            <div className="sidebar">
                <div className="offcanvass offcanvas-start ">
                    <div className="offcanvas-header d-flex justify-content-center">
                        <img src={image.adminLogo} alt="" />
                        <img src={image.adminLogo} alt="" />
                    </div>
                    <hr className="p-0 m-0" />
                    <div className="offcanvass-body d-grid  align-items-stretch ">
                        <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0 ">
                            <SidebarItem
                                icon={<i className='bx bxs-dashboard bx-sm bx-tada-hover'></i>}
                                title="Dashboard"
                                location="/admin"
                            />

                            <SidebarItem
                                icon={<i className='bx bxs-dashboard bx-sm bx-tada-hover'></i>}
                                title="Kelola Konten"
                                location="/admin/kelola-konten"
                            />

                            <SidebarItem
                                icon={<i className='bx bxs-book bx-sm bx-tada-hover'></i>}
                                title="Kelola Artikel"
                                location="/admin/kelola-artikel"
                            />

                            <SidebarItem
                                icon={<i className='bx bxs-news bx-sm bx-tada-hover'></i>}
                                title="Kelola Berita"
                                location="/admin/kelola-berita"
                            />

                            <SidebarItem
                                icon={<i className='bx bx-log-out-circle bx-sm bx-tada-hover'></i>}
                                title="Logout"
                                location="#"
                                onClick={handleLogoutClick}
                            />
                            <hr className="p-0 m-0" />
                        </ul>
                    </div>
                </div>
            </div>

            <main>
                <div className="container-fluid p-2">
                    <div className="row">
                        <div className="col">
                            <nav
                                id="navbar"
                                className="navbar bg-transparant d-flex align-items-center justify-content-between"
                            >
                                <h2 className="fw-semibold">{titlePage}</h2>
                            </nav>
                        </div>
                    </div>
                </div>
                {children}

                <ModalLogout
                    show={showLogoutModal}
                    title="Logout"
                    onClose={handleLogoutCancel}
                    onSubmit={handleLogoutConfirm}
                />
            </main>
        </>
    );
}

export default Layout; 