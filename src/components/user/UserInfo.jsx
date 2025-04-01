import { useState, useEffect } from "react";
import pic from "../../assets/profile.jpeg";
import api from "../../api";
import { toast } from "react-toastify";


function UserInfo({ userInfo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userInfo });
  const [loading, setLoading] = useState(false);


  // Sync formData with userInfo when userInfo changes
  useEffect(() => {
    setFormData({ ...userInfo });
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.put("edit_user_profile/", formData);
      setIsEditing(false);
      toast.success("Profile Updated Successfully!");
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* First Card: Image, Full Name, Edit Profile */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img
                src={pic}
                alt="User"
                className="img-fluid rounded-circle mb-3"
                style={{ width: "120px", height: "120px" }}
              />
              <div className="card-title">
                <p className="mb-1">{`${formData.first_name} ${formData.last_name}`}</p>
                <p className="text-muted mb-2">{formData.email}</p>
              </div>
              <button
                className="btn btn-primary mt-auto w-100"
                onClick={handleEditToggle}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>
          </div>
        </div>

        {/* Second Card: User Details */}
        <div className="col-md-9">
          <div className="card shadow-sm h-80" style={{ padding: "10px" }}>
            <div className="card-body p-3">
              <h5 className="card-title bg-primary text-white p-2 rounded">
                Account Overview
              </h5>
              <hr />
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Left Column */}
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label>
                          <strong>Full Name:</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label>
                          <strong>Last Name:</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label>
                          <strong>Phone:</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label>
                          <strong>Email:</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label>
                          <strong>Username:</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label>
                          <strong>City:</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label>
                          <strong>Country:</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success mt-3"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </form>
              ) : (
                <div className="row">
                  {/* Left Column */}
                  <div className="col-md-6">
                    <div className="mb-2">
                      <strong>Full Name:</strong>{" "}
                      {`${formData.first_name} ${formData.last_name}`}
                    </div>
                    <div className="mb-2">
                      <strong>Phone:</strong> {formData.phone}
                    </div>
                    <div className="mb-2">
                      <strong>Email:</strong> {formData.email}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-md-6">
                    <div className="mb-2">
                      <strong>Username:</strong> {formData.username}
                    </div>
                    <div className="mb-2">
                      <strong>City:</strong> {formData.city}
                    </div>
                    <div className="mb-2">
                      <strong>Country:</strong> {formData.state}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
