import React from 'react';
import image from '../../../Image';

const FotoFasilitasPesantren = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <img src={image.banner2} className="img-fluid" alt="..." />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <img src={image.banner1} className="img-fluid" alt="..." />
                </div>
                {/* Tambahkan lebih banyak gambar jika diperlukan */}
            </div>
        </div>
    );
}

export default FotoFasilitasPesantren;
