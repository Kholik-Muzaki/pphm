import axios from "axios";

const ApiInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },
});

ApiInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } return config
    }, (error) => Promise.reject(error)
)

export default ApiInstance;
