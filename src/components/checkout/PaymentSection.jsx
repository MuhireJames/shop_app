import api from "../../api";
import { useState } from "react";

function PaymentSection() {
  const cart_code = localStorage.getItem("cart_code");
  const [loading, setLoading] = useState(false);

  function makePayment() {
    setLoading(true);
    api
      .post("initiate_payment/", { cart_code })
      .then((res) => {
        console.log(res.data);
        window.location.href = res.data.data.link;
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }

  function makePaymentWithPaypal() {
    setLoading(true);
    api
      .post("initiate_paypal_payment/", { cart_code })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data.approval_url) {
          window.location.href = res.data.approval_url;
        }
      })
      .catch((err) => {
        console.log("Error initiating payment", err.message);
        setLoading(false);
      });
  }

  return (
    <div className="col-md-4 mb-4" style={{ width: "25rem" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5
            className="card-title text-center"
            style={{
              fontWeight: "600",
              backgroundColor: "#006BFF",
              borderRadius: "5px",
            }}
          >
            Payment Options
          </h5>
          <hr />
          {/* Pay with PayPal */}
          <div className="d-flex align-items-center mb-3">
            <button
              className="btn btn-outline-primary w-100"
              style={{ fontWeight: "500" }}
              id="paypal"
              onClick={makePaymentWithPaypal}
              disabled={loading}
            >
              <i className="fa-brands fa-cc-paypal"></i> Pay with PayPal
            </button>
          </div>
          {/* Pay with Flutterwave */}
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-warning w-100"
              style={{ fontWeight: "500" }}
              onClick={makePayment}
              id="flutterwave"
              disabled={loading}
            >
              <i className="fa-regular fa-credit-card"></i> Pay with Flutterwave
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSection;
