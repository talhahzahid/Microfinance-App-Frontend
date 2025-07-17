import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Home from "./Page/Home";
import Calculateloan from "./Page/Calculateloan";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculateloan" element={<Calculateloan />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
