import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/public/HomePage";
import HomePage from "./views/public/HomePage";
import LoginPage from "./views/public/LoginPage";
import RegisterPage from "./views/public/RegisterPage";
import ProfilePage from "./views/public/ProfilePage";
// import EditProfilePage from "./views/public/EditProfilePage";
import ProductPage from "./views/public/ProductPage";
// import ProductDetailPage from "./views/public/ProductDetailPage";

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        {/* <Route path='/edit-profile' element={<EditProfilePage/>}></Route> */}
        <Route path='/product' element={<ProductPage/>}></Route>
        {/* <Route path='/product-detail' element={<ProductDetailPage/>}></Route> */}

      </Routes>
    </div>
  );
}


