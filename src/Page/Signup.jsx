import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const Cnic = useRef();
  const Email = useRef();
  const Username = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cnic = Cnic.current.value;
    const email = Email.current.value;
    const userName = Username.current.value;
    console.log(cnic);
    console.log(email);
    console.log(userName);
    try {
      setLoading(true);
      const response = await fetch(
        `https://microfinance-app-backend-rho.vercel.app/api/v1/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cnic, email, userName }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success("Your Account Created Successfully. Check your Email.");
        Cnic.current.value = "";
        Email.current.value = "";
        Username.current.value = "";
        navigate("/login");
      } else {
        toast.error(data?.message || "Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen py-25 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center sm:px-3">
        {/* first box  */}
        <div className="w-full p-10 flex items-center justify-center bg-white">
          <div className="max-w-xl">
            <h1
              className="text-4xl font-extrabold text-center mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              My Loan App
            </h1>
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-gray-700 leading-relaxed text-justify"
            >
              Welcome to our loan application platform, where getting the
              financial support you need is simple, secure, and completely
              online. By creating your account, you'll gain access to a fast and
              transparent loan application process designed to put your needs
              first. Whether you're planning to cover unexpected expenses,
              invest in your future, or simply need a little extra support —
              we're here to help. Sign up today to start your journey towards
              financial ease, with full control over your application, real-time
              updates, and secure document uploads — all from the comfort of
              your home.
            </p>
          </div>
        </div>
        {/* second box  */}
        <div className=" w-full flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-3 items-center bg-white shadow-xl  p-15 rounded-2xl w-full max-w-md"
          >
            <h1
              className="font-medium text-2xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {" "}
              Additional Details{" "}
            </h1>
            <input
              placeholder="Enter Cnic Number"
              type="number"
              ref={Cnic}
              className="px-3 py-2 focus:outline-none border border-gray-300 focus:ring-indigo-700 focus:ring-2 rounded-lg w-full"
            />
            <input
              placeholder="Enter Email"
              type="email"
              ref={Email}
              className="px-3 py-2 focus:outline-none border border-gray-300 focus:ring-indigo-700 focus:ring-2 rounded-lg w-full"
            />
            <input
              placeholder="Enter Username"
              type="text"
              ref={Username}
              className="px-3 py-2 focus:outline-none border border-gray-300 focus:ring-indigo-700 focus:ring-2 rounded-lg w-full"
            />
            <button className="px-9 py-2 bg-blue-700 rounded-lg text-white w-full ">
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5 text-center " />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
