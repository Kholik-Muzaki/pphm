import { useEffect } from 'react';
import ProgramUnggulanImage from '../ProgramUnggulanImage/ProgramUnggulanImage';
import './ProgramUnggulan.css'
import Aos from 'aos';
import image from '../../../Image';

const ProgramUnggulan = () => {
    useEffect(() => {
        Aos.init();
    })

    const dataProgramUnggulan = [
        {
            "id": 1,
            "image": image.kitab,
            "title": "Kajian Kitab Kuning",
            "text": "Kajian Kitab Kuning adalah upaya menggali warisan keilmuan para ulama. Dalam kajian ini, santri diajak memahami akidah, fiqih, tasawuf, dan akhlak secara mendalam, menjadi bekal bagi kehidupan yang berlandaskan ilmu dan iman."
        },
        {
            "id": 2,
            "image": image.sholawat,
            "title": "Sholawat Nabi",
            "text": "Sholawat Nabi adalah wujud cinta kepada Rasulullah ﷺ. Dalam acara ini, kami bersama-sama melantunkan sholawat dengan penuh khusyuk untuk meraih keberkahan, ketenangan, dan syafaat beliau di dunia dan akhirat."
        },
        {
            "id": 3,
            "image": image.duror,
            "title": "Pembacaan Maulid Simtud Duror",
            "text": "Melalui pembacaan Maulid Simtud Duror, kami menghidupkan cinta kepada Rasulullah ﷺ dengan lantunan syair yang penuh makna, mempererat ukhuwah, dan menjemput keberkahan."
        }
    ];
    return (
        <div data-aos="fade-up" data-aos-duration="3000">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="fw-bold text-center h1-program-unggulan">
                            Program Unggulan
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <ProgramUnggulanImage data={dataProgramUnggulan} />
                </div>
            </div>
        </div>


    )
}

export default ProgramUnggulan;