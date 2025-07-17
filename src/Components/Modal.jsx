import React, { useRef } from "react";

const Modal = ({ isOpen, onClose }) => {
  const cnicRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const cnic = cnicRef.current.value;
    const email = emailRef.current.value;
    const name = nameRef.current.value;

    console.log("Form Submitted:", { cnic, email, name });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm	 bg-opacity-40 flex items-center justify-center z-50">
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
