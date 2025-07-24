import { Eye, EyeOff, Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const cnicRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cnic = cnicRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();
    if (!cnic || !password) {
      toast.error("Please fill in both CNIC and Password.");
      return;
    }
    if (!/^\d{13}$/.test(cnic)) {
      toast.error("CNIC must be exactly 13 digits.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `https://microfinance-app-backend-rho.vercel.app/api/v1/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cnic, password }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Login successful!");
        cnicRef.current.value = "";
        passwordRef.current.value = "";
        navigate("/home");
      } else {
        toast.error(result.message || "Invalid CNIC or Password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-25 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center bg-white p-10 w-full max-w-md shadow-2xl rounded-2xl"
      >
        <h1 className="text-2xl font-medium mb-4">Login</h1>

        <input
          ref={cnicRef}
          placeholder="Enter CNIC Number"
          type="number"
          autoComplete="off"
          className="px-3 py-2 w-full mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
        />

        <div className="relative w-full mb-4">
          <input
            ref={passwordRef}
            placeholder="Enter Password"
            type={viewPassword ? "text" : "password"}
            autoComplete="current-password"
            className="px-3 py-2 pr-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
          />
          <span
            onClick={() => setViewPassword(!viewPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-indigo-600"
          >
            {viewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 bg-blue-700 cursor-pointer text-white rounded-lg hover:bg-blue-800 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <Loader2 className="animate-spin h-5 w-5 mx-auto" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
