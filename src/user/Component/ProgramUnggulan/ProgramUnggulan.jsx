import { useEffect } from 'react';
import { dataProgramUnggulan } from '../../data';
import ProgramUnggulanImage from '../ProgramUnggulanImage/ProgramUnggulanImage';
import './ProgramUnggulan.css'
import Aos from 'aos';

const ProgramUnggulan = () => {
    useEffect(() => {
        Aos.init();
    })
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