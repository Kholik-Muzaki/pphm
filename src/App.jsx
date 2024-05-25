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

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profil-pengasuh" element={<ProfilPengasuh />} />
            <Route path="/profil-pesantren" element={<ProfilPesantren />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/kontak" element={<Kontak />} />

            {/* Login */}
            <Route path="/login" element={<Login />} />
            {/* Admin */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/kelola-artikel" element={<KelolaArtikel />} />
            <Route path="/admin/kelola-berita" element={<KelolaBerita />} />

            {/* Bendahara */}
            <Route path="/bendahara" element={<Dashboard />} />
         </Routes>
      </Router>
   );
}

export default App;
