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
import Dashboard from "./Admin/Dashboard";
import Sidebar from "./Components/Sidebar";
import SingleApplication from "./Admin/SingleApplication";

const AppLayout = ({ children }) => (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Navbar />
    <ToastContainer position="top-right" autoClose={3000} />
    {children}
  </div>
);

const AdminLayout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      {children}
    </div>
  </div>
);

const App = () => {
  return (
    <>
      <Routes>
        {/* Routes WITH Navbar */}
        <Route
          path="/"
          element={
            <AppLayout>
              <Signup />
            </AppLayout>
          }
        />
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

        {/* Route WITHOUT Navbar */}
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
