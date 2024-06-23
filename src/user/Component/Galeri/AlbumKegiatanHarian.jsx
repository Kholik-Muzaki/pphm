import React from 'react';
import image from '../../../Image';

const AlbumKegiatanHarian = () => {
    return (
        <div id="albumKegiatanHarian" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image.banner3} className="d-block w-100 h-50" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={image.banner3} className="d-block w-100" alt="..." />
                </div>
                {/* Tambahkan lebih banyak item jika diperlukan */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#albumKegiatanHarian" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#albumKegiatanHarian" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default AlbumKegiatanHarian;
