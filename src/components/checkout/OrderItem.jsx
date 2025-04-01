import React from "react";
import { BASE_URL } from "../../api";

function OrderItem({ cartItem }) {
  return (
    <div
      className="d-flex justify-content-between align-items-center mb-4"
      style={{
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        marginTop: "10px",
      }}
    >
      {/* Product Image and Details */}
      <div className="d-flex align-items-center">
        <img
          src={`${BASE_URL}${cartItem.product.image}`}
          alt="product"
          className="img-fluid"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />

        <div className="ms-3">
          <h6 className="mb-1" style={{ fontWeight: "600" }}>
            {cartItem.product.name}
          </h6>
          <small className="text-muted">Quantity: {cartItem.quantity}</small>
        </div>
      </div>

      {/* Product Price */}
      <div>
        <h6 className="mb-0" style={{ fontWeight: "600", color: "#333" }}>
          ${cartItem.product.price}
        </h6>
      </div>
    </div>
  );
}

export default OrderItem;
