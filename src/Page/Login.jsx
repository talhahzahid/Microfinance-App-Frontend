import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const cnic = useRef();
  const password = useRef();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      console.log("hello");
      const cnic = cnic.current.value;
      const password = password.current.value;
      const response = await fetch(``);
      const result = await response.json();
      if (response.ok) {
        console.log(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center justify-center bg-white p-10 w-full max-w-md shadow-2xl rounded-2xl"
        >
          <h1 className="text-2xl font-medium mb-4">Login</h1>
          <input
            ref={cnic}
            placeholder="Enter Cnic Number"
            type="text"
            className="px-3 py-2 focus:outline-none border border-gray-100 rounded-sm focus:ring-indigo-700 focus:ring-2 mb-3 w-full"
          />
          <input
            ref={password}
            placeholder="Enter Password"
            type="text"
            className="px-3 py-2 focus:outline-none border border-gray-100 rounded-sm focus:ring-indigo-700 focus:ring-2 mb-3 w-full"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
