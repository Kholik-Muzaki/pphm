import "./FasilitasPesantren.css";

const FasilitasPesantren = () => {
const fasilitasPesantren = [
        {
            icon: "fas fa-mosque",
            title: "Masjid",
            description: "Masjid Pesantren Hidayatul Mubtadi'ien merupakan pusat kegiatan ibadah dan pengajian untuk santri dan jamaah."
        },
        {
            icon: "fas fa-bed",
            title: "Asrama",
            description: "Pesantren memiliki asrama yang nyaman dan bersih untuk para santri. Setiap asrama dilengkapi dengan fasilitas yang mendukung kenyamanan."
        },
        {
            icon: "fas fa-book",
            title: "Perpustakaan",
            description: "Perpustakaan pesantren menyediakan berbagai koleksi kitab-kitab Islam klasik, buku-buku pelajaran, dan referensi modern yang dapat diakses santri."
        },
    ];

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
