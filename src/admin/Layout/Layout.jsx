import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SidebarItem from "../Component/SideBarItem/SideBarItem";
import "./Layout.css";
import Dropdown from "../Component/Dropdown/Dropdown";
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
                                location="#"
                            />
                            <SidebarItem
                                icon={<i className='bx bxs-bank'></i>}
                                title="Manage User"
                                location="#"
                            />
                            <hr className="p-0 m-0" />
                        </ul>
                    </div>
                </div>
            </div>

            <main>
                <nav
                    id="navbar"
                    className="navbar bg-transparant d-flex align-items-center justify-content-between"
                >
                    <h2 className="fw-semibold">{titlePage}</h2>
                    <div className="d-flex align-items-center gap-2">
                        <i className='bx bxs-bell notif-icon'></i>
                        <Dropdown
                            className="iconNavbar"
                            imageSrc={<i className='bx bx-child' ></i>}
                            dropdownContent={
                                <>
                                    <NavLink className="dropdown-item" to="/admin/profile">
                                        <i className='bx bxs-user-account'></i> Edit Profile
                                    </NavLink>
                                    <NavLink className="dropdown-item" onClick={handleLogoutClick}>
                                        <i className='bx bx-right-arrow-alt' ></i> Logout
                                    </NavLink>
                                </>
                            }
                        />
                    </div>
                </nav>
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