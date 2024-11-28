import { useNavigate } from "react-router-dom"
import './Login.css'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"
import ApiInstance from "../../../api/api"
import image from "../../../Image"
const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (values) => {
        try {
            const response = await ApiInstance.post("/auth/login", {
                username: values.username,
                password: values.password
            });

            console.log("response data:", response.data);

            const { token } = response.data.data;
            const { role } = response.data.data.user;

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            if (role === "admin") {
                navigate("/admin");
            } if (role === "bendahara") {
                navigate("/bendahara");
            } else {
                setErrorMessage("Role tidak dikenali");
            }
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "Terjadi kesalahan saat login"
            );
        }
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: handleSubmit,
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Username harus diisi!"),
            password: Yup.string().required("Password harus diisi!"),
        })
    })

    const handleChange = (event) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }

    return (
        <>
            <div className="container-fluid login-container">
                <div className="row login-container-row">
                    {/* Bagian kiri dengan gambar */}
                    <div className="col-sm-12 col-md-12 col-lg-6 login-kiri">
                        <img src={image.adminLogo} alt="Login Illustration" className="login-image" />
                    </div>

                    {/* Sisi Kanan: Form */}
                    <div className="col-sm-12 col-md-12 col-lg-6 login-kanan">
                        <h2 className="selamat-datang">Selamat Datang Kembali</h2>
                        <p className="p-login">Masuklah dengan penuh keikhlasan, menuju kesuksesan.</p>

                        <form onSubmit={formik.handleSubmit}>
                            {/* Input Username */}
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className={`form-control form-login ${formik.touched.username && formik.errors.username ? "is-invalid" : ""}`}
                                    id="username"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                />
                                {formik.touched.username && formik.errors.username && (
                                    <div className="invalid-feedback">{formik.errors.username}</div>
                                )}
                            </div>

                            {/* Input Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                )}
                            </div>

                            {/* Tombol Login */}
                            <button type="submit" className="btn btn-primary btn-login">Login</button>

                            {/* Error Message Global */}
                            {errorMessage && (
                                <div className="alert alert-danger error-message" role="alert">
                                    {errorMessage}
                                </div>
                            )}

                        </form>

                        {/* Kutipan Islami */}
                        <p className="kutipan-islami">
                            "Bismillah, setiap langkah menuju keberhasilan adalah doa."
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login