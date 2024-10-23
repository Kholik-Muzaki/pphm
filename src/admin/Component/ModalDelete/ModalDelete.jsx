import React from 'react';
import './ModalDelete.css';
import image from '../../../Image'; // Import image sesuai dengan path yang benar

const ModalDelete = ({ onClose, onConfirm, title, description }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-delete">
                <div className="modal-content-delete">
                    <div className="modal-header-delete">
                        <img
                            src={image.trash}
                            alt="Delete"
                            className="modal-icon"
                        />
                    </div>
                    <div className="modal-body-delete">
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                    <div className="modal-footer-delete d-flex gap-3 w-100">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onConfirm} // Panggil fungsi onConfirm
                        >
                            Oke
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary mb"
                            onClick={onClose}
                        >
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;
