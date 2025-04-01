import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function CartSummary({ cartTotal, tax }) {
  const totalWithTax = cartTotal + tax;

  return (
    <div className="col-md-4 align-self-start">
      <div
        className="card shadow-sm"
        style={{
          borderRadius: "10px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="card-body">
          <h5 className="card-title text-center" style={{ fontWeight: "600" }}>
            Cart Summary
          </h5>
          <hr />
          <div className="d-flex justify-content-between mb-3">
            <span style={{ fontWeight: "500" }}>Subtotal:</span>
            <span style={{ fontWeight: "500" }}>{`$${cartTotal.toFixed(
              2
            )}`}</span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span style={{ fontWeight: "500" }}>Tax:</span>
            <span style={{ fontWeight: "500" }}>{`$${tax.toFixed(2)}`}</span>
          </div>
          <div
            className="d-flex justify-content-between mb-4"
            style={{ fontSize: "1.1rem" }}
          >
            <span style={{ fontWeight: "600" }}>Total:</span>
            <strong style={{ fontWeight: "600" }}>{`$${totalWithTax.toFixed(
              2
            )}`}</strong>
          </div>
          <Link to="/checkout">
            <button
              className="btn btn-primary w-100"
              style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                fontWeight: "600",
                padding: "10px",
              }}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
