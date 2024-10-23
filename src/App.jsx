import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/user/Pages/Home/Home";
import ProfilPengasuh from "../src/user/Pages/Profil Pengasuh/ProfilPengasuh";
import ProfilPesantren from "../src/user/Pages/Profil Pesantren/ProfilPesantren";
import Artikel from "../src/user/Pages/Artikel/Artikel";
import Berita from "../src/user/Pages/Berita/Berita";
import Kontak from "../src/user/Pages/Kontak/Kontak";
import Dashboard from "./admin/Pages/Dashboard/Dashboard";
import KelolaArtikel from "./admin/Pages/KelolaArtikel/KelolaArtikel";
import Login from "./admin/Pages/Login/Login";
import KelolaBerita from "./admin/Pages/KelolaBerita/KelolaBerita";
import GaleriFotoVideo from "./user/Pages/Galeri Foto Video/GaleriFotoVideo";
import Navbar2 from "./user/Component/Navbar/Navbar2";
import DetailBerita from "./user/Pages/DetailBerita/DetailBerita";
import DetailArtikel from "./user/Pages/DetailArtikel/DetailArtikel";
import TambahArtikel from "./admin/Pages/TambahArtikel/TambahArtikel";
import Coba from "./admin/Pages/Coba";

function App() {
   return (
      <Router>
         <Routes>
            {/* User */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profil-pengasuh" element={<ProfilPengasuh />} />
            <Route path="/profil-pesantren" element={<ProfilPesantren />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/:id" element={<DetailArtikel />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/berita/:id" element={<DetailBerita />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/galeri-foto-video" element={<GaleriFotoVideo />} />
            <Route path="navbar" element={<Navbar2 />} />

            {/* Login */}
            <Route path="/login" element={<Login />} />
            {/* Admin */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/kelola-artikel" element={<KelolaArtikel />} />
            <Route path="admin/tambah-artikel" element={<TambahArtikel />} />
            <Route path="/admin/kelola-berita" element={<KelolaBerita />} />

            {/* Bendahara */}
            <Route path="/bendahara" element={<Dashboard />} />

            <Route path="/coba" element={<Coba />} />
         </Routes>
      </Router>
   );
}

export default App;
