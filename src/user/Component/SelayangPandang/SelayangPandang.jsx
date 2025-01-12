import { useEffect } from 'react';
import './SelayangPandang.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SelayangPandang = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid selayang-pandang mt-3 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="fw-bold text-center h1-selayang-pandang">
                                Selayang Pandang
                                <hr />
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 text-justify">
                            <p className="selayang-text">
                                <b>Pondok Pesantren Hidayatul Mubtadi’ien</b> adalah lembaga pendidikan Islam yang berkomitmen membentuk generasi berilmu, berakhlak, dan berwawasan luas. Kami percaya bahwa ilmu adalah cahaya, dan akhlak adalah sinarnya.
                            </p>
                            <p className="selayang-text">
                                <span className='quote-selayang-pandang'>
                                    📖 طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
                                    <br />
                                </span>
                                <span className='mt-2'>“Menuntut ilmu itu wajib bagi setiap Muslim.”</span>
                            </p>
                            <p className="selayang-text">
                                Dengan lingkungan yang penuh keberkahan, pesantren kami mendidik santri menjadi pribadi yang unggul dalam ilmu dan akhlak mulia, serta siap menghadapi tantangan zaman. Bergabunglah bersama kami untuk masa depan yang lebih bercahaya.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <iframe
                                className="w-100 h-100 selayang-video"
                                src="https://www.youtube.com/embed/Gof1mFhfzNU?autoplay=1&controls=0"
                                title="YouTube Live Player"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelayangPandang;
