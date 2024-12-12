import BackToTopButton from "../../Component/BackToTopButton/BackToTopButton";
import BannerPage from "../../Component/BannerPage/BannerPage";
import Footer from "../../Component/Footer/Footer";
import Navbar2 from "../../Component/Navbar/Navbar2";
import "./ProfilPengasuh.css"; // Import CSS untuk styling responsif
import pengasuh from "../../assets/Image/pengasuh.png";

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
                            src={pengasuh}
                            alt="Pengasuh Pesantren"
                            className="img-fluid profile-img"
                        />
                    </div>

                    {/* Bagian Profil Pengasuh */}
                    <div className="col-md-8">
                        <h2 className="fw-bold mb-4"> K.H. Nururrohman </h2>
                        <p className="lead">
                            K.H. Nururrohman adalah sosok ulama yang penuh dedikasi dan kecintaan terhadap dunia pendidikan Islam. Beliau adalah pendiri Pondok Pesantren Hidayatul Mubtadi’ien, sebuah lembaga pendidikan yang kini menjadi salah satu pilar penting dalam membentuk generasi muda berilmu dan berakhlak mulia di Purwokerto Selatan, Banyumas, Jawa Tengah.

                            Lahir dari perjalanan ilmu yang panjang, K.H. Nururrohman menimba ilmu di Pondok Pesantren Lirboyo, Kediri, Jawa Timur, yang terkenal dengan tradisi keilmuan Islam yang kuat dan mendalam. Setelah menyelesaikan pendidikannya pada tahun 1995, beliau mewujudkan cita-citanya untuk mendirikan pesantren sebagai wadah bagi generasi muda untuk belajar, berkembang, dan menjadi insan yang siap membangun agama, bangsa, dan negara.

                            Dengan semangat yang tak pernah padam, beliau membimbing santri dengan nilai-nilai akhlakul karimah, kecintaan pada ilmu, dan komitmen untuk menyebarkan ajaran Islam rahmatan lil ‘alamin. Keteguhan hati, kebijaksanaan, dan kasih sayang beliau telah menjadi sumber inspirasi dan teladan bagi para santri dan masyarakat sekitar.


                        </p>
                        <p>
                            K.H. Nururrohman percaya bahwa pendidikan bukan sekadar menghafal teks, melainkan membentuk karakter dan pemahaman mendalam akan kehidupan. Lewat kepemimpinannya, Pondok Pesantren Hidayatul Mubtadi’ien terus menjadi tempat bersemi harapan, lahirnya generasi Qurani yang berilmu dan berintegritas.
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
                                K.H. Nururrohman, Pengasuh Pondok Pesantren Hidayatul Mubtadi’ien
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
