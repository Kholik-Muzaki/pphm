import React, { useState } from "react";
import Layout from "../../../admin/Layout/Layout";
import "./EditProfile.css";

const EditProfileAdmin = () => {
    // Placeholder for user data (replace with fetched data from database)
    const [userData, setUserData] = useState({
        username: "admin123",
        password: "password123",
    });

    const [editData, setEditData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here (e.g., update database with editData)
        console.log("Updated data:", editData);
    };

    return (
        <Layout titlePage="Edit Profile Admin">
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
                                <p className="form-control">{userData.password}</p>
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
        </Layout>
    );
};

export default EditProfileAdmin;
