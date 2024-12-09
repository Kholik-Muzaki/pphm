import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import ApiInstance from "../../../api/api";
import ModalSuccess from "../../../admin/Component/ModalSuccess/ModalSuccess";

const EditProfileBendahara = () => {
    const [userData, setUserData] = useState(null);
    const [editData, setEditData] = useState({
        username: "",
        password: "",
    });
    const [statusMessage, setStatusMessage] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await ApiInstance.get("/auth/profile");
                console.log(response.data.data.user);
                setUserData(response.data.data.user);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setStatusMessage("Gagal memuat data profil.");
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await ApiInstance.put("/auth/updateProfile", editData);
            console.log("Response data:", response);

            setStatusMessage("Profil berhasil diperbarui!");
            setIsModalVisible(true); // Tampilkan modal sukses

            setUserData((prevUserData) => ({
                ...prevUserData,
                username: editData.username || prevUserData.username,
            }));

            setEditData({
                username: "",
                password: "",
            });

            setTimeout(() => {
                setIsModalVisible(false);
                navigate("/bendahara");
            }, 5000);
        } catch (error) {
            console.error("Error updating profile:", error);
            setStatusMessage("Gagal memperbarui profil. Silakan coba lagi.");
        }
    };

    if (!userData) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <Layout titlePage="Edit Profile Bendahara">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h4 className="text-center">Detail Akun</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label"><strong>Username:</strong></label>
                                <p className="form-control">{userData.username}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><strong>Password:</strong></label>
                                <p className="form-control">*******</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-8 offset-md-2">
                    <div className="card shadow-sm">
                        <div className="card-header bg-success text-white">
                            <h4 className="text-center">Edit Profil</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Username Baru</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="Masukkan username baru"
                                        value={editData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password Baru</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Masukkan password baru"
                                        value={editData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success">
                                        Simpan Perubahan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {isModalVisible && (
                <ModalSuccess
                    onClose={() => setIsModalVisible(false)}
                    title="Sukses"
                    description="Profil bendahara berhasil diperbarui!"
                />
            )}
        </Layout>
    );
};

export default EditProfileBendahara;
