import { useNavigate } from "react-router-dom"
import image from "../../../Image"
import './Login.style.css'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"
import ApiInstance from "../../../api/api"
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
                    <div className="col-sm-12 col-md-12 col-lg-6 login-kiri">
                        <img src={image.imageLogin} alt="" />
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 login-kanan">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-9">
                                <h2 className="selamat-datang">Selamat Datang Kembali</h2>
                                <p>Silahkan melakukan login dengan mengisi form di bawah!</p>

                                <form onSubmit={formik.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${formik.touched.username && formik.errors.username ? "is-invalid" : ""}`}
                                            id="username"
                                            aria-describedby="username"
                                            name="username"
                                            onChange={handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.username}
                                        />
                                        {formik.touched.username && formik.errors.username && <div className="invalid-feedback">{formik.errors.username}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                                            id="exampleInputPassword1"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                        />
                                        {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button> <br />
                                </form>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login