import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/public/HomePage";
import LoginPage from "./views/public/LoginPage";
import RegisterPage from "./views/public/RegisterPage";
import ProfilePage from "./views/public/ProfilePage";
import EditProfilePage from "./views/public/EditProfilePage";
import ProductPage from "./views/public/ProductPage";
import ProductDetailPage from "./views/public/ProductDetailPage";
import AboutUsPage from "./views/public/AboutUsPage"
import CartPage from "./views/public/CartPage"
import EditAddress from "./views/public/EditAddress";
import OrderDetail from "./views/public/OrderDetail"
import PaymentMethods from "./views/public/PaymentMethods";
import OrderHistory from "./views/public/OrderHistory";
export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/edit-profile' element={<EditProfilePage />}></Route>
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/product-detail' element={<ProductDetailPage />}></Route>
        <Route path='/about-us' element={<AboutUsPage />}></Route>
        <Route path='/cart-page' element={<CartPage />}></Route>
        <Route path='/cre-add' element={<EditAddress />}></Route>
        <Route path='/order-detail' element={<OrderDetail />}></Route>
        <Route path='/payment-methods' element={<PaymentMethods />}></Route>
        <Route path='/order-history' element={<OrderHistory />}></Route>
      </Routes>
    </div>
  );
}


