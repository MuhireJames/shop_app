import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api";

function PaymentStatusPage({ setNumCartItems }) {
  const [statusMessage, setStatusMessage] = useState("Verifying Your Payment");
  const [statusSubMessage, setStatusSubMessage] = useState(
    "Wait a moment, your payment is being verified"
  );
  const location = useLocation();

  useEffect(
    function () {
      const queryParams = new URLSearchParams(location.search);

      const ref = queryParams.get("ref");
      const payer_id = queryParams.get("PayerID");
      const payment_id = queryParams.get("paymentId");

      if (ref && payment_id && payer_id) {
        api
          .post(
            `paypal_payment_callback/?ref=${ref}&paymentId=${payment_id}&PayerID=${payer_id}`
          )
          .then((res) => {
            setStatusMessage(res.data.message);
            setStatusSubMessage(res.data.subMessage);
            setNumCartItems(0);
            localStorage.removeItem("cart_code");
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.message);
            setStatusMessage(err.message);
            setStatusSubMessage(err.subMessage);
          });
      }
    },
    [location.search, setNumCartItems]
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status");
    const txRef = queryParams.get("tx_ref");
    const transactionId = queryParams.get("transaction_id");

    if (status && txRef && transactionId) {
      api
        .post(
          `payment_callback/?status=${status}&tx_ref=${txRef}&transaction_id=${transactionId}`
        )
        .then((res) => {
          setStatusMessage(res.data.message);
          setStatusSubMessage(res.data.subMessage);
          setNumCartItems(0);
          localStorage.removeItem("cart_code");
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err.message);
          setStatusMessage(err.message);
          setStatusSubMessage(err.subMessage);
        });
    }
  }, [location, setNumCartItems]);

  return (
    <header className="py-5 bg-primary">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h2 className="display-4 fw-bold">{statusMessage}</h2>
          <p className="lead fw-normal text-white-75 mb-4">
            {statusSubMessage}
          </p>
          <span>
            <Link to="/profile" className="btn btn-light btn-lg px-4 py-2 mx-3">
              View Order Details
            </Link>
            <Link to="/" className="btn btn-light btn-lg px-4 py-2">
              Continue Shopping
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default PaymentStatusPage;
