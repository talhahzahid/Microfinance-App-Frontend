import React, { useRef } from "react";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose }) => {
  const cnicRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cnic = cnicRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const userName = nameRef.current.value.trim();

    // ✅ Basic validation
    if (!cnic || !email || !userName) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cnic, email, userName }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Your request send to admin successfully");
        console.log("Signup response:", result);
        onClose();
      } else {
        toast.error(result.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-10 shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h1 className="text-center font-medium text-2xl">
            Additional Details
          </h1>

          <input
            ref={cnicRef}
            type="text"
            placeholder="Enter CNIC Number"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Your Email"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Your Name"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <button
            type="submit"
            className="px-3 py-2 bg-blue-700 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
