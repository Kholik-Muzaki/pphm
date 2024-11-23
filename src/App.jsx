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
import EditArtikel from "./admin/Pages/EditArtikel/EditArtikel";
import TambahBerita from "./admin/Pages/TambahBerita/TambahBerita";
import EditBerita from "./admin/Pages/EditBerita/EditBerita";
import KelolaFoto from "./admin/Pages/KelolaFoto/KelolaFoto";
import KelolaVideo from "./admin/Pages/KelolaVideo/KelolaVideo";
import TambahVideo from "./admin/Pages/TambahVideo/TambahVideo";
import EditVideo from "./admin/Pages/EditVideo/EditVideo";
import DashboardBendahara from "./bendahara/Pages/DashboardBendahara/DashboardBendahara";
import KelolaKeuangan from "./bendahara/Pages/KelolaKeuangan/KelolaKeuangan";
import TambahKeuangan from "./bendahara/Pages/TambahKeuangan/TambahKeuangan";
import EditKeuangan from "./bendahara/Pages/EditKeuangan/EditKeuangan";
import TambahFoto from "./admin/Pages/TambahFoto/TambahFoto";
import EditFoto from "./admin/Pages/EditFoto/EditFoto";
import EditProfileAdmin from "./admin/Pages/EditProfile/EditProfile";
import DetailKeuangan from "./bendahara/Pages/DetailKeuangan/DetailKeuangan";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
   return (
      <Router>
         <Routes>
            {/* Public Routes */}
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

            {/* Admin Private Routes */}
            <Route
               path="/admin"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <Dashboard />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/kelola-artikel"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <KelolaArtikel />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/tambah-artikel"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <TambahArtikel />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/edit-artikel/:id"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <EditArtikel />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/kelola-berita"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <KelolaBerita />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/tambah-berita"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <TambahBerita />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/edit-berita/:id"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <EditBerita />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/kelola-foto"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <KelolaFoto />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/tambah-foto"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <TambahFoto />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/edit-foto/:id"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <EditFoto />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/kelola-video"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <KelolaVideo />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/tambah-video"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <TambahVideo />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/edit-video/:id"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <EditVideo />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/admin/edit-profile"
               element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                     <EditProfileAdmin />
                  </ProtectedRoute>
               }
            />

            {/* Bendahara Private Routes */}
            <Route
               path="/bendahara"
               element={
                  <ProtectedRoute allowedRoles={["bendahara"]}>
                     <DashboardBendahara />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/bendahara/kelola-keuangan"
               element={
                  <ProtectedRoute allowedRoles={["bendahara"]}>
                     <KelolaKeuangan />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/bendahara/tambah-keuangan"
               element={
                  <ProtectedRoute allowedRoles={["bendahara"]}>
                     <TambahKeuangan />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/bendahara/edit-keuangan/:id"
               element={
                  <ProtectedRoute allowedRoles={["bendahara"]}>
                     <EditKeuangan />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/bendahara/detail-keuangan/:id"
               element={
                  <ProtectedRoute allowedRoles={["bendahara"]}>
                     <DetailKeuangan />
                  </ProtectedRoute>
               }
            />
         </Routes>
      </Router>
   );
}

export default App;
