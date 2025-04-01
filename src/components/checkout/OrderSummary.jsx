import React from "react";
import OrderItem from "./OrderItem";

const OrderSummary = ({ cartItems, tax, cartTotal }) => {
  const totalWithTax = cartTotal + tax;
  return (
    <div className="col-md-8" style={{ width: "40rem" }}>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5
            className="card-title text-center mb-4"
            style={{
              fontWeight: "600",
              backgroundColor: "#006BFF",
              borderRadius: "5px",
            }}
          >
            Order Summary
          </h5>

          {/* Order Items */}
          <div className="mb-4">
            {cartItems.map((cartItem) => (
              <OrderItem cartItem={cartItem} key={cartItem.id} />
            ))}
            <hr />
          </div>

          {/* Total Section */}
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0" style={{ fontWeight: "600" }}>
              Total Amount To Pay
            </h6>
            <h6 className="mb-0" style={{ fontWeight: "600", color: "#333" }}>
              {`$${totalWithTax.toFixed(2)}`}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
