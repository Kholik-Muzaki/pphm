import React from 'react';
import './ModalSuccess.css';
import image from '../../../Image';

const ModalSuccess = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-success">
                <div className="modal-content-success">
                    <div className="modal-header-success">
                        <img
                            src={image.sukses}
                            alt="Success"
                            className="modal-icon"
                        />
                    </div>
                    <div className="modal-body-success">
                        <h5>Artikel Berhasil Disimpan!</h5>
                        <p>Terima kasih sudah menambah artikel baru.</p>
                    </div>
                    <div className="modal-footer-success">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onClose}
                        >
                            Oke
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSuccess;
