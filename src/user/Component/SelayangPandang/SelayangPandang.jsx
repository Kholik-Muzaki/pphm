import { useEffect } from 'react';
import './SelayangPandang.css'
import AOS from 'aos';

const SelayangPandang = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div data-aos="fade-up" data-aos-duration="2000">
                <div className="container-fluid selayang-pandang">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="fw-bold fs-4 text-center">
                                    Selayang Pandang <hr />
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 text-justify">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis tenetur commodi vitae repellat. Blanditiis accusantium quibusdam ex porro, autem doloribus, error ipsam laborum placeat molestias sapiente obcaecati a iusto?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt voluptatum dolores officiis harum deleniti maxime quidem fugiat accusamus vero a architecto enim molestias aliquid, quia reiciendis, illo eos. Soluta.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis tenetur commodi vitae repellat. Blanditiis accusantium quibusdam ex porro, autem doloribus, error ipsam laborum placeat molestias sapiente obcaecati a iusto?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt voluptatum dolores officiis harum deleniti maxime quidem fugiat accusamus vero a architecto enim molestias aliquid, quia reiciendis, illo eos. Soluta.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <iframe
                                    className='w-100 h-100'
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

        </>
    )
}

export default SelayangPandang