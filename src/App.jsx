import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Home from "./Page/Home";
import Calculateloan from "./Page/Calculateloan";
import Navbar from "./Components/Navbar";
import Signup from "./Page/Signup";
import Loanform from "./Page/Loanform";
import About from "./Page/About";
import Dashboard from "./Admin/Dashboard";
import Sidebar from "./Components/Sidebar";
import SingleApplication from "./Admin/SingleApplication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import styles globally

// Layout with Navbar
const AppLayout = ({ children }) => (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Navbar />
    {children}
  </div>
);

// Layout for Admin Panel
const AdminLayout = ({ children }) => (
  <div className="flex">
    <div className="flex-1 p-6">{children}</div>
  </div>
);

const App = () => {
  return (
    <>
      {/* ✅ Toast container globally available */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* Routes WITH Navbar */}
        <Route
          path="/home"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/calculateloan"
          element={
            <AppLayout>
              <Calculateloan />
            </AppLayout>
          }
        />
        <Route
          path="/loanform"
          element={
            <AppLayout>
              <Loanform />
            </AppLayout>
          }
        />
        <Route
          path="/about"
          element={
            <AppLayout>
              <About />
            </AppLayout>
          }
        />

        {/* Admin Routes WITHOUT Navbar */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/singleApplication/:id"
          element={
            <AdminLayout>
              <SingleApplication />
            </AdminLayout>
          }
        />

        {/* Public Routes without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
