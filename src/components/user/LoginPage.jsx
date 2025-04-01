import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../api";
import Error from "../ui/Error";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const { setIsAuthenticated, get_username } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const userInfo = { username, password };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    api
      .post("token/", userInfo)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        setUsername("");
        setPassword("");
        setLoading(false);
        setIsAuthenticated(true);
        get_username();
        setError("");

        const from = location?.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });
  }
  return (
    <div
      className="container my-5"
      style={{ maxWidth: "500px", paddingTop: "80px" }}
    >
      <div className="row g-5 mx-auto ">
        {error && <Error error={error} />}
        <div className="col mx-auto">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Welcome Back</h3>
              <p className="text-center">Please Login to your account</p>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setUsername(e.target.value);
                    }}
                    placeholder="Enter Your Username"
                    required
                  />
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100 mb-2"
                  disabled={loading}
                >
                  Login
                </button>
              </form>
              <div className="mt-2">
                <p className="text-center">
                  Forgot Password?
                  <Link to="/request_password_reset">Reset Password</Link>
                </p>
                <p className="text-center">
                  Don't have an account?
                  <Link to="/signup" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
