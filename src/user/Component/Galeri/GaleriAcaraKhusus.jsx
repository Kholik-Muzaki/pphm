import React from 'react';
import image from '../../../Image';

const GaleriAcaraKhusus = () => {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card">
                    <img src={image.banner1} className="card-img-top h-100" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-dark">Acara Khusus 1</h5>
                        <p className="card-text text-dark">Deskripsi acara khusus 1.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card">
                    <img src={image.banner2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-dark">Acara Khusus 2</h5>
                        <p className="card-text text-dark">Deskripsi acara khusus 2.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card">
                    <img src={image.banner3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-dark">Acara Khusus 2</h5>
                        <p className="card-text text-dark">Deskripsi acara khusus 2.</p>
                    </div>
                </div>
            </div>
            {/* Tambahkan lebih banyak kartu jika diperlukan */}
        </div>
    );
}

export default GaleriAcaraKhusus;
