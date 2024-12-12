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
            "text": "Dalam pengajian Kitab Kuning, kami menggali khazanah ilmu yang telah diwariskan para ulama. Diadakan secara berkala setiap bulan dan tahun, pengajian ini menjadi jembatan bagi para santri dan masyarakat untuk memahami lebih dalam tentang akidah, fiqih, tasawuf, dan akhlak."
        },
        {
            "id": 2,
            "image": image.sholawat,
            "title": "Sholawat Nabi",
            "text": "Melantunkan Sholawat Nabi bukan sekadar ritual, melainkan wujud cinta kita kepada Baginda Rasulullah SAW. Melalui acara ini, kami mengajak Anda untuk bersama-sama memanjatkan sholawat dengan penuh khusyuk dan harap, meraih keberkahan dan syafaat beliau di dunia dan akhirat."
        },
        {
            "id": 3,
            "image": image.manakib,
            "title": "Manakib",
            "text": "Manakib adalah pengajian khusus yang membahas kisah dan keteladanan para wali Allah, khususnya Syaikh Abdul Qadir Al-Jailani. Melalui kegiatan ini, kami mengenang jejak langkah para kekasih Allah yang penuh kebijaksanaan, kesabaran, dan keikhlasan."
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