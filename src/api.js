import axios from "axios";
import { jwtDecode } from "jwt-decode";

// export const BASE_URL = "http://127.0.0.1:8000";
export const BASE_URL=import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: BASE_URL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      const decoded = jwtDecode(token);
      const expiresAt = decoded.exp;
      const currentTime = Date.now() / 1000;

      if (expiresAt > currentTime) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    // Always return the config object
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
