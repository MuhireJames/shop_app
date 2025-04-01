import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BASE_URL } from "../../api";
import api from "../../api";
import { toast } from "react-toastify";

function CartItem({
  item,
  setCartTotal,
  cartItems,
  setNumCartItems,
  setCartItems,
}) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [loading, setLoading] = useState(false);

  const itemData = { quantity: quantity, item_id: item.id };
  const itemId = { item_id: item.id };

  function deleteCartItem() {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      api
        .post("delete_cartitem/", itemId)
        .then((res) => {
          console.log(res.data);
          toast.success("Cart item deleted successfully!");
          setCartItems((cartItems) =>
            cartItems.filter((cartitem) => cartitem.id !== item.id)
          );

          const newCartTotal = cartItems
            .filter((cartitem) => cartitem.id !== item.id)
            .reduce((acc, curr) => acc + curr.total, 0);
          setCartTotal(newCartTotal);

          const newNumCartItems = cartItems
            .filter((cartitem) => cartitem.id !== item.id)
            .reduce((acc, curr) => acc + curr.quantity, 0);
          setNumCartItems(newNumCartItems);
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Failed to delete cart item!");
        });
    }
  }

  function updateCartItem() {
    setLoading(true);
    api
      .patch("update_quantity/", itemData)
      .then((res) => {
        setLoading(false);
        toast.success("Cart item updated successfully!");
        const updatedCartItems = cartItems.map((cartitem) =>
          cartitem.id === item.id ? res.data.data : cartitem
        );
        setCartTotal(
          updatedCartItems.reduce((acc, curr) => acc + curr.total, 0)
        );
        setNumCartItems(
          updatedCartItems.reduce((acc, curr) => acc + curr.quantity, 0)
        );
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
        toast.error("Failed to update cart item!");
      });
  }

  return (
    <div className="card mb-5 shadow-sm">
      <div
        className="row g-0 align-items-center"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <div className="col-3 col-md-2">
          <img
            src={`${BASE_URL}${item.product.image}`}
            className="img-fluid rounded-start"
            alt={item.product.name}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        <div className="col-9 col-md-6">
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "600" }}>
              {item.product.name}
            </h5>
            <h6 className="card-text" style={{ color: "#333" }}>
              {`$${item.product.price}`}
            </h6>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="d-flex align-items-center justify-content-between">
            <input
              type="number"
              className="form-control form-control-sm me-2"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{
                fontSize: "14px",
                maxWidth: "80px",
              }}
            />

            <div className="d-flex">
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={updateCartItem}
                style={{
                  padding: "5px 10px",
                  fontSize: "14px",
                  height: "35px",
                }}
                disabled={loading}
              >
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  "Update"
                )}
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={deleteCartItem}
                style={{
                  padding: "5px 10px",
                  fontSize: "14px",
                  height: "35px",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
