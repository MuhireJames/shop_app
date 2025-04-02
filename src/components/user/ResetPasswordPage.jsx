function ResetPasswordPage() {
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
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value="password"
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
                    placeholder="Confirm Your New Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100 mb-2"
                >
                  Reset Password
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
