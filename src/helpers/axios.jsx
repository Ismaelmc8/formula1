import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_BACKEND_URL;
let headers = {};

// Add your default headers here
headers["Content-Type"] = "application/json;charset=UTF-8";
headers["Access-Control-Allow-Origin"] = "*";

if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`
}

const axiosInstance = axios.create({
    baseURL : baseURL,
    headers,
});

export default axiosInstance;