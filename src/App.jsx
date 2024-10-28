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
import EditArtikel from "./admin/Pages/EditArtikel/EditArtikel";
import TambahBerita from "./admin/Pages/TambahBerita/TambahBerita";
import EditBerita from "./admin/Pages/EditBerita/EditBerita";
import KelolaFoto from "./admin/Pages/KelolaFoto/KelolaFoto";
import KelolaVideo from "./admin/Pages/KelolaVideo/KelolaVideo";
import TambahVideo from "./admin/Pages/TambahVideo/TambahVideo";
import EditVideo from "./admin/Pages/EditVideo/EditVideo";
import DashboardBendahara from "./bendahara/Pages/DashboardBendahara/DashboardBendahara";
import KelolaKeuangan from "./bendahara/Pages/KelolaKeuangan/KelolaKeuangan";

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
            <Route path="admin/edit-artikel/:id" element={<EditArtikel />} />
            <Route path="/admin/kelola-berita" element={<KelolaBerita />} />
            <Route path="/admin/tambah-berita" element={<TambahBerita />} />
            <Route path="admin/edit-berita/:id" element={<EditBerita />} />
            <Route path="admin/kelola-foto" element={<KelolaFoto />} />
            <Route path="admin/kelola-video" element={<KelolaVideo />} />
            <Route path="admin/tambah-video" element={<TambahVideo />} />
            <Route path="admin/edit-video/:id" element={<EditVideo />} />

            {/* Bendahara */}
            <Route path="/bendahara" element={<DashboardBendahara />} />
            <Route path="/bendahara/kelola-keuangan" element={<KelolaKeuangan />} />

            <Route path="/coba" element={<Coba />} />
         </Routes>
      </Router>
   );
}

export default App;
