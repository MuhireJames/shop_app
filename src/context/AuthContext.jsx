import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../api";

const AuthContext = createContext(false);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  function handleAuth() {
    const token = localStorage.getItem("access");
    if (token) {
      const decoded = jwtDecode(token);
      const expiresAt = decoded.exp;
      const currentTime = Date.now() / 1000;
      if (expiresAt >= currentTime) {
        setIsAuthenticated(true);
      }
    }
  }

  function get_username() {
    api
      .get("get_username")
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    handleAuth();
    get_username();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        get_username,
        username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
