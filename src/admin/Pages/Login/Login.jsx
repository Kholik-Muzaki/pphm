import image from "../../../Image"
import './Login.style.css'

const Login = () => {
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

                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    aria-describedby="username"
                                />
                                <div id="username" className="form-text">
                                    Silahkan mengisi username anda
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">
                                    Role
                                </label>
                                <select id="role" className="form-select">
                                    <option>Admin</option>
                                    <option>Bendahara</option>
                                </select>
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