import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            alert("Sesi anda berakhir, silahkan login kembali");
            navigate('/login');
        } else if (allowedRoles && !allowedRoles.includes(role)) {
            alert("Anda tidak memiliki izin untuk mengakses halaman ini");
            navigate('/login');
        }
    }, [navigate, token, role, allowedRoles]);
    return token && (!allowedRoles || allowedRoles.includes(role)) ? children : null;
}

export default ProtectedRoute;