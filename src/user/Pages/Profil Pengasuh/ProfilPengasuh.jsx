import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import BannerPage from "../../Component/BannerPage/BannerPage";
import Footer from "../../Component/Footer/Footer";
import Navbar2 from "../../Component/Navbar/Navbar2";
import "./ProfilPengasuh.css"; // Import CSS untuk styling responsif

const ProfilPengasuh = () => {
    return (
        <>
            <Navbar2 />
            <BannerPage label="Profil Pengasuh" />
            <div className="container mt-5">
                <div className="row align-items-center">
                    {/* Bagian Gambar Pengasuh */}
                    <div className="col-md-4 text-center">
                        <img
                            src="https://via.placeholder.com/300x400?text=Foto+Pengasuh"
                            alt="Pengasuh Pesantren"
                            className="img-fluid rounded-circle profile-img"
                        />
                    </div>

                    {/* Bagian Profil Pengasuh */}
                    <div className="col-md-8">
                        <h2 className="fw-bold mb-4">KH. Ahmad Maulana</h2>
                        <p className="lead">
                            KH. Ahmad Maulana merupakan pengasuh Pondok Pesantren Al-Hikmah yang telah berdedikasi dalam
                            dunia pendidikan Islam selama lebih dari 30 tahun. Dengan pengalaman yang luas dalam membina
                            santri, beliau berperan aktif dalam menyebarkan ajaran Islam yang rahmatan lil alamin dan membimbing
                            santri-santrinya menjadi insan yang berakhlak mulia.
                        </p>
                        <p>
                            Latar belakang pendidikan beliau mencakup pendidikan formal di dalam dan luar negeri, termasuk
                            studi keislaman di Universitas Al-Azhar, Mesir. Selain itu, beliau juga aktif sebagai tokoh ulama
                            dalam berbagai forum dakwah internasional dan memiliki komitmen untuk membangun generasi muda
                            muslim yang berkualitas.
                        </p>
                    </div>
                </div>

                {/* Visi dan Misi */}
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h3 className="fw-bold text-center">Visi dan Misi</h3>
                        <hr />
                        <div className="vision-mission">
                            <h4 className="fw-bold">Visi:</h4>
                            <p>
                                Mewujudkan generasi muda yang beriman, bertaqwa, berakhlak mulia, dan memiliki kompetensi
                                dalam berbagai bidang ilmu, sehingga mampu berkontribusi positif untuk agama, bangsa, dan negara.
                            </p>
                            <h4 className="fw-bold mt-3">Misi:</h4>
                            <ul>
                                <li>Memberikan pendidikan Islam yang komprehensif dan berkualitas.</li>
                                <li>Membina santri untuk memiliki akhlak yang mulia dan jiwa kepemimpinan.</li>
                                <li>Mengembangkan potensi santri di bidang akademik, seni, dan keterampilan.</li>
                                <li>Menjaga tradisi keilmuan Islam yang berdasarkan Al-Quran dan Hadis.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Quote atau Kata Bijak */}
                <div className="row mt-5">
                    <div className="col-sm-12 text-center">
                        <blockquote className="blockquote">
                            <p className="mb-0">
                                "Pendidikan bukan hanya sekadar mentransfer ilmu, tetapi juga membentuk karakter yang
                                mulia dan pribadi yang bertanggung jawab."
                            </p>
                            <footer className="blockquote-footer mt-2">
                                KH. Ahmad Maulana, Pengasuh Pondok Pesantren Al-Hikmah
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>

            <Footer />
            <BackToTopButton />
        </>
    );
};

export default ProfilPengasuh;
