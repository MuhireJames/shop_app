import React, { useState } from "react";
import api from "../../api";
import { toast } from "react-toastify";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("request_password_reset/", { email });
      toast.success("Password reset link sent to your email!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to send password reset link: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container my-5"
      style={{ maxWidth: "500px", paddingTop: "80px" }}
    >
      <div className="row g-5 mx-auto">
        <div className="col mx-auto">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Forgot Password</h3>
              <p className="text-center">
                Enter your email to receive a password reset link.
              </p>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100 mb-2"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
