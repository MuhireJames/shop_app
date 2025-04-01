import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../context/AuthContext";

function NavBar({ numCartItems }) {
  const { isAuthenticated, setIsAuthenticated, username } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          QuickMart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated ? (
              <>
                {/* Show Login and Register when not authenticated */}
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link fw-semibold"
                    activeClassName="active"
                    end
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/signup"
                    className="nav-link fw-semibold"
                    activeClassName="active"
                    end
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* Show Profile and Logout when authenticated */}
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className="nav-link fw-semibold"
                    activeClassName="active"
                    end
                  >
                    {`Hi,${username}`}
                  </NavLink>
                </li>
                <li className="nav-item" onClick={handleLogout}>
                  <NavLink to="/" className="nav-link fw-semibold">
                    Logout
                  </NavLink>
                </li>
              </>
            )}
            {/* Cart Icon */}
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link">
                <button
                  type="button"
                  className="btn btn-outline-dark position-relative"
                >
                  <FaCartShopping size={18} />
                  {numCartItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                      {numCartItems}
                    </span>
                  )}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
