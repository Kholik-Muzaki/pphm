import React, { useEffect } from "react";
import "./FasilitasPesantren.css";
import { fasilitasPesantren } from "../../data"; // Import data fasilitas dari data.js
import Aos from "aos";

const FasilitasPesantren = () => {

    return (
        <div className="container mt-5 text-center">
            <h3 className="fw-bold h3-fasilitas-pesantren">Fasilitas Pesantren</h3>
            <hr />
            <div className="row">
                {fasilitasPesantren.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="facility-card">
                            <div className="facility-icon">
                                <i className={item.icon}></i>
                            </div>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FasilitasPesantren;
