import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate()
  const location=useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    try {
      await api.post("password_reset/confirm/", {
        password: data.password, 
        token: token
      });
      toast.success("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to reset password: " + error.message);
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
              <h3 className="text-center">Reset Password</h3>
              <p className="text-center">Enter your new password below.</p>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your New Password"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Your New Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100 mb-2"
                  disabled={loading}
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
