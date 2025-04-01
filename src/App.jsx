import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./components/home/HomePage";
import NotFound from "./components/ui/NotFound";
import ProductPage from "./components/product/ProductPage";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import LoginPage from "./components/user/loginPage";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import api from "./api";
import { AuthProvider } from "./context/AuthContext";
import SignupPage from "./components/user/SignupPage";
import UserProfilePage from "./components/user/UserProfilePage";
import PaymentStatusPage from "./components/payments/PaymentStatusPage";
import ForgotPasswordPage from "./components/user/ForgotPasswordPage";
import ResetPasswordPage from "./components/user/ResetPasswordPage";

function App() {
  const [numCartItems, setNumCartItems] = useState(0);
  const cart_code = localStorage.getItem("cart_code");

  useEffect(
    function () {
      if (cart_code) {
        api
          .get(`get_cart_stats?cart_code=${cart_code}`)
          .then((res) => {
            console.log(res.data);
            setNumCartItems(res.data.num_of_items);
          })
          .catch((err) => {
            console.error(err.message);
          });
      }
    },
    [cart_code]
  );

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout numCartItems={numCartItems} />}>
            <Route index element={<HomePage />} />
            <Route
              path="products/:slug"
              element={<ProductPage setNumCartItems={setNumCartItems} />}
            />
            <Route
              path="cart"
              element={<CartPage setNumCartItems={setNumCartItems} />}
            />
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route
              path="payment-status"
              element={<PaymentStatusPage setNumCartItems={setNumCartItems} />}
            />
            <Route
              path="/request_password_reset"
              element={<ForgotPasswordPage />}
            />
            <Route path="/reset_password" element={<ResetPasswordPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
