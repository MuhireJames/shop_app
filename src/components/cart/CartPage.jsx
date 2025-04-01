import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import useCartData from "../../hooks/useCartData.js";
import Spinner from "../ui/Spinner";

const CartPage = ({ setNumCartItems }) => {
  const { cartItems, cartTotal, tax, loading, setCartItems, setCartTotal } =
    useCartData();

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div
      className="container my-3 py-3"
      style={{ height: "88vh", overflow: "scroll" }}
    >
      {cartItems.length < 1 ? (
        <div
          className="alert alert-primary"
          style={{ marginTop: "100px" }}
          role="alert"
        >
          You haven't added any items to your cart.
        </div>
      ) : (
        <div className="row mb-5">
          <h5 className="mb-4" style={{ marginTop: "4rem" }}>
            Shopping Cart: You have {cartItems.length}{" "}
            {cartItems.length > 1 ? "Products" : "Product"} in Your Cart
          </h5>

          {/* Cart Items Section */}
          <div className="col-md-8">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                setCartTotal={setCartTotal}
                cartItems={cartItems}
                setNumCartItems={setNumCartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>

          {/* Cart Summary Section */}
          <CartSummary cartTotal={cartTotal} tax={tax} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
