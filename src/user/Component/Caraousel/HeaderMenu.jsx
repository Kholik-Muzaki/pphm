import './HeaderMenu.css';

const HeaderMenu = () => {
    return (
        <div className='header-menu'>
            <div className="container container-header-menu">
                <div className="row">
                    <div className="col-12">
                        <h2 className='h2-header'>Selamat Datang Di Situs Resmi <br />
                            <span>Pondok Pesantren Hidayatul Mubtadi'ien</span>
                        </h2>
                    </div>
                </div>
                <div className="row row-desc-header-menu">
                    <div className="col-sm-12 col-md-12 col-lg-10 desc-header-menu">
                        <p className='p-header'>
                            Memberikan kontribusi nyata dalam pembangunan sumber daya manusia dan menciptakan insan kamil yang memiliki kecerdasan intelektual dan spiritual demi pembangunan agama, bangsa dan negara.
                        </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-10">
                        <button className='btn-header'>
                            <i className='bx bxs-school bx-tada bx-md'></i>
                            Pondok Pesantren Hidayatul Mubtadi'ien
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu;