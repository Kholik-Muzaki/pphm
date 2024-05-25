import { useNavigate } from "react-router-dom"
import image from "../../../Image"
import './Login.style.css'
import { useFormik } from "formik"
import * as Yup from "yup"
const Login = () => {

    const navigate = useNavigate();
    const handleSubmit = (values) => {
        // alert("Login Success");
        // alert(formik.values.role)
        // alert(formik.values.username)
        // alert(formik.values.password)
        // navigate("/admin");

        const { username, password, role } = values;
        if (username === "admin" && password === "admin" && role === "Admin") {
            navigate("/admin");
            alert("Login Success as Admin");
        } else if (username === "bendahara" && password === "bendahara" && role === "Bendahara") {
            navigate("/bendahara");
            alert("Login Success as Bendahar");
        } else (
            alert("Invalid credentials")
        )
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            role: "",
        },
        onSubmit: handleSubmit,
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Username harus diisi!"),
            password: Yup.string().required("Password harus diisi!"),
            role: Yup.string().required("Role harus diisi!"),
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
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">
                                    Role
                                </label>
                                <select
                                    id="role"
                                    className={`form-select ${formik.touched.role && formik.errors.role ? "is-invalid" : ""}`}
                                    name="role"
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.role}>
                                    <option value="" label="Pilih Role" />
                                    <option value="Admin" label="Admin" />
                                    <option value="Bendahara" label="Bendahara" />
                                </select>
                                {formik.touched.role && formik.errors.role && <div className="invalid-feedback">{formik.errors.role}</div>}
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button> <br />
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login