import PaymentSection from "./PaymentSection";
import OrderSummary from "./OrderSummary";
import useCartData from "../../hooks/useCartData.js";

function CheckoutPage() {
  const { cartItems, tax, cartTotal } = useCartData();
  return (
    <div className="container my-5" style={{ paddingTop: "80px" }}>
      <div className="row g-5">
        {/* Order Summary Section */}
        <div className="col-md-8">
          <OrderSummary cartItems={cartItems} tax={tax} cartTotal={cartTotal} />
        </div>

        {/* Payment Section */}
        <div className="col-md-4">
          <PaymentSection />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
