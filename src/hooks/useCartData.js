import { useState, useEffect } from "react";
import api from "../api";

function useCartData() {
  const cart_code = localStorage.getItem("cart_code");
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const tax = 4.00

  useEffect(() => {
    if (!cart_code) return;

    setLoading(true);
    setError(null);

    api
      .get(`get_cart/?cart_code=${cart_code}`)
      .then((res) => {
        setCartItems(res.data.items);
        setCartTotal(res.data.sum_total);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
        setLoading(false);
      });
  }, [cart_code]);

  return {
    cartItems,
    cartTotal,
    tax,
    loading,
    setCartItems,
    setCartTotal,
    error,
  };
}

export default useCartData;
