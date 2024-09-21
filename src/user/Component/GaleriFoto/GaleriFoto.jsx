import React from 'react';
import './GaleriFoto.css';

const GaleriFoto = ({ album, index }) => {
    return (
        <div className="container container-foto">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8">
                    {/* Carousel Bootstrap */}
                    {/* Tambahkan index agar id carousel unik */}
                    <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {album.images.map((img, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}
                                >
                                    <img
                                        src={img.src}
                                        className="d-block w-100"
                                        alt={img.caption}
                                        style={{ height: '400px', objectFit: 'cover' }}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{img.caption}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 d-flex flex-column justify-content-center">
                    {/* Deskripsi album */}
                    <h4 className='album-title'>Album: {album.title}</h4>
                    <p className='album-description'>{album.description}</p>
                </div>
            </div>
            <hr />
        </div>

    );
};

export default GaleriFoto;
