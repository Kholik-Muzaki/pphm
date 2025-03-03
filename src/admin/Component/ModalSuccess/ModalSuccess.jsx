import React from 'react';
import './ModalSuccess.css';
import image from '../../../Image';

const ModalSuccess = ({ onClose, title, description }) => {
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
                        <h5>{title}</h5>
                        <p>{description}</p>
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
