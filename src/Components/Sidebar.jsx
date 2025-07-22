import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:flex min-h-screen w-64 bg-blue-700 text-white flex-col p-6">
      <h1 className="text-2xl font-bold mb-8 text-center sm:text-sm">
        Loan App
      </h1>

      <div className="flex flex-col space-y-4">
        <Link
          to="/home"
          className="hover:bg-blue-600 px-4 py-2 rounded text-sm lg:text-base transition"
        >
          Home
        </Link>
        <Link
          to="/loanform"
          className="hover:bg-blue-600 px-4 py-2 rounded text-sm lg:text-base transition"
        >
          Loan Form
        </Link>
        <Link
          to="/calculateloan"
          className="hover:bg-blue-600 px-4 py-2 rounded text-sm lg:text-base transition"
        >
          Calculate
        </Link>
        <Link
          to="/about"
          className="hover:bg-blue-600 px-4 py-2 rounded text-sm lg:text-base transition"
        >
          About
        </Link>
        <Link
          to="/dashboard"
          className="hover:bg-blue-600 px-4 py-2 rounded text-sm lg:text-base transition"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
