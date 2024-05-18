import './KontakInfo.css'

const KontakInfo = () => {

    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Kontak Info</h2>
                    </div>
                </div>
            </div >

            <div className="container mt-5 mb-5 text-center">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                        <i class='bx bxs-envelope bx-md bx-border-circle bx-tada'></i>
                        <h4 className="name-text mt-3 mb-3">Email</h4>
                        <p className='text-center'>hidayatulmubtadiienPaBersole@gmail.com</p>
                        <p className='text-center'>hidayatulmubtadiienPiBersole@gmail.com</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                        <i class='bx bxl-whatsapp bx-md bx-border-circle bx-tada'></i>
                        <h4 className="name-text mt-3 mb-3">WhatsApp</h4>
                        <p className='text-center'>+628123456789</p>
                        <p className='text-center'>+628987654321</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                        <i class='bx bx-map bx-md bx-border-circle bx-tada'></i>
                        <h4 className="name-text mt-3 mb-3">Alamat</h4>
                        <p className='text-justify'>Jl. Inpres, Bersole, Karangpucung, Kec. Purwokerto Selatan, Kab. Banyumas, Jawa Tengah.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KontakInfo