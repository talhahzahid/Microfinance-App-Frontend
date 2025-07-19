import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Home from "./Page/Home";
import Calculateloan from "./Page/Calculateloan";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Signup from "./Page/Signup";
import Loanform from "./Page/Loanform";
import About from "./Page/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculateloan" element={<Calculateloan />} />
          <Route path="/" element={<Signup />} />
          <Route path="/loanform" element={<Loanform />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
