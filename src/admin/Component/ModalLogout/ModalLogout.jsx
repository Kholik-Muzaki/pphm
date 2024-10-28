import React from "react";
import "./ModalLogout.css";

const ModalLogout = ({ show, onClose, onSubmit }) => {
    const modalStyle = {
        display: show ? "block" : "none",
    };

    const backdropStyle = {
        display: show ? "block" : "none",
    };


    return (
        <>
            <div className={`modal-backdrop fade${show ? " show" : ""}`} style={backdropStyle}></div>
            <div className={`modal${show ? " show" : ""}`} tabIndex="-1" style={modalStyle} role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Logout</h5>
                            <button type="button" className="btn-close" onClick={onClose} />
                        </div>
                        <div className="modal-body  text-center">
                            <h5>Apakah Anda Yakin Ingin Keluar?</h5>
                            <p>Pastikan semua pekerjaan telah disimpan sebelum keluar</p>
                        </div>
                        <div className="modal-footer">
                            <div className="row button-footer-logout">
                                <div className="col-6">
                                    <button type="button" className="btn btn-danger" onClick={onSubmit}>
                                        Keluar
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn btn-outline-primary" onClick={onClose}>
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalLogout
