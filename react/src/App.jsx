import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/public/HomePage";
import HomePage from "./views/public/HomePage";
import LoginPage from "./views/public/LoginPage";
import RegisterPage from "./views/public/RegisterPage";

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </div>
  );
}


