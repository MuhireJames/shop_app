import React from "react";

function Header() {
  return (
    <header className="py-5 bg-primary">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h4 className="display-4 fw-bold">
            Welcome to QuickMart – Where Quality Meets Convenience!
          </h4>
          <p className="lead fw-normal text-white-75 mb-4">
            Discover a world of premium products tailored to your lifestyle.
          </p>
          <a
            href="#shop"
            className="btn btn-light btn-lg rounded-pill px-4 py-2"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
