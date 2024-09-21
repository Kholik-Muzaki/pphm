import AOS from 'aos';
import { useEffect } from 'react';
import './Quote.css';

const Quote = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="container-fluid container-quote" data-aos="fade-up" data-aos-duration="2000">
            <div className="row row-quote">
                <div className="col-12 col-quote">
                    <h1 className='h1-quote'>
                        مَنْ سَلَكَ طَرِيْقًا يَلْتَمِسُ فِيْهِ عِلْمًا، سَهَّلَ اللهُ لَهُ بِهِ طَرِيْقًا إِلَى الْجَنَّةِ
                    </h1>
                    <p className='p-quote'>
                        “Barang siapa menelusuri jalan untuk mencari ilmu padanya,
                        Allah akan memudahkan baginya jalan menuju surga.” <br />
                        (HR. Muslim)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Quote;