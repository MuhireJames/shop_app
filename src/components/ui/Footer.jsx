import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-primary text-white py-3 text-center"
      style={{
        zIndex: 1000, // Ensures the footer stays above other content
      }}
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <a
              href="/"
              className="text-white text-decoration-none mx-2 hover:underline"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white text-decoration-none mx-2 hover:underline"
            >
              About
            </a>
            <a
              href="/"
              className="text-white text-decoration-none mx-2 hover:underline"
            >
              Shop
            </a>
            <a
              href="/contact"
              className="text-white text-decoration-none mx-2 hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 text-xl hover:text-gray-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 text-xl hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 text-xl hover:text-gray-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text-sm mb-0">
              All reserved &copy; {new Date().getFullYear()} QwickMart
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
