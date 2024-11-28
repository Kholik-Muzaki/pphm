import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import ApiInstance from "../../../api/api";

const EditProfileBendahara = () => {
    const [userData, setUserData] = useState(null); // Mulai dengan null
    const [editData, setEditData] = useState({
        username: "",
        password: "",
    });

    const [statusMessage, setStatusMessage] = useState("");

    // Fetch user profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await ApiInstance.get("/auth/profile");
                console.log(response.data.data.user);
                setUserData(response.data.data.user);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    // Handle input changes in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await ApiInstance.put("/auth/updateProfile", editData);
            console.log("response data:", response);
            
            setStatusMessage("Profil berhasil diperbarui!");

            // Update the displayed profile with the new data
            setUserData((prevUserData) => ({
                ...prevUserData,
                username: editData.username || prevUserData.username,
            }));

            // Clear form fields after success
            setEditData({
                username: "",
                password: "",
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            setStatusMessage("Gagal memperbarui profil. Silakan coba lagi.");
        }
    };

    if (!userData) {
        // Show a loading spinner or fallback UI while fetching data
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
            {/* Display User Details */}
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

            {/* Edit Profile Form */}
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
                            {statusMessage && (
                                <div className="mt-3 text-center">
                                    <p>{statusMessage}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EditProfileBendahara;
