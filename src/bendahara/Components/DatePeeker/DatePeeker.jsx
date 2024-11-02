import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DatePeeker = ({ show, onClose, onProcess }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleProcess = () => {
        if (startDate && endDate) {
            onProcess(startDate, endDate);
            onClose(); // Tutup modal setelah proses
        } else {
            alert('Pilih rentang tanggal terlebih dahulu.');
        }
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cetak Laporan Keuangan</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label>Mulai Tanggal:</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="Pilih tanggal mulai"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Hingga Tanggal:</label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                placeholderText="Pilih tanggal akhir"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Batal</button>
                        <button type="button" className="btn btn-primary" onClick={handleProcess}>Proses</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatePeeker;
