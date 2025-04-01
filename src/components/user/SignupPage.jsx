import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api";

function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function onSubmitForm(event) {
    event.preventDefault();

    // Validate passwords
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      await api.post(`register/`, formData);
      setLoading(false);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Registration failed!");
      console.log(error.message);
    }
  }

  return (
    <div className="container my-5" style={{ paddingTop: "80px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header">
              <h3 className="text-center">Register Here</h3>
              <p className="text-center">
                Create Your account to Join QuickMart
              </p>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter your first name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter your last name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm your password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </form>
              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login
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

export default SignupPage;
