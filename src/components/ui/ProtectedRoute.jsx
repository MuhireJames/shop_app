import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../../api";
import Spinner from "./Spinner";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const location = useLocation();

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  async function refreshToken() {
    const refreshToken = localStorage.getItem("refresh");
    try {
      const res = await api.post("/token/refresh/", { refresh: refreshToken });
      if (res.status === 200) {
        localStorage.setItem("access", res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      setIsAuthorized(false);
    }
  }

  async function auth() {
    const token = localStorage.getItem("access");
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const expiresAt = decoded.exp;
      const currentTime = Date.now() / 1000;

      if (currentTime > expiresAt) {
        await refreshToken();
      } else {
        setIsAuthorized(true);
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
      setIsAuthorized(false);
    }
  }

  if (isAuthorized === null) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner />
      </div>
    );
  }

  return isAuthorized ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default ProtectedRoute;
