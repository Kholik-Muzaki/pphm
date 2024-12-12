import './HeaderMenu.css';

const HeaderMenu = () => {
    return (
        <div className='header-menu'>
            <div className="container container-header-menu">
                <h1 className='h1-header'>
                    Selamat Datang di Situs Resmi
                </h1>
                <h1 className='h1-header highlight'>
                    Pondok Pesantren Hidayatul Mubtadi'ien
                </h1>
                <p className='p-subheader text-center'>
                    Membangun generasi berakhlak mulia, berilmu, dan berwawasan luas
                </p>
                <blockquote className='quote'>
                    "Ilmu adalah cahaya, dan akhlak adalah sinarnya"
                </blockquote>
                <div className='info-box'>
                    <p>
                        Terletak di jantung Jawa Tengah, Pondok Pesantren Hidayatul Mubtadi'ien berdedikasi untuk pendidikan Islam yang holistik, membentuk santri yang siap membangun agama, bangsa, dan negara.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeaderMenu;
