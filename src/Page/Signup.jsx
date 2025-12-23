import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import z from "zod";
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const Cnic = useRef();
  const Email = useRef();
  const Username = useRef();

  const signupSchema = z.object({
    cnic: z.string().min(13, "CNIC must be 13 digits"),
    email: z.string().email("Invalid email"),
    userName: z.string().min(3, "Username too short"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      cnic: "",
      email: "",
      userName: "",
    },
  });

  const onSubmits = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await fetch(
        "https://microfinance-app-backend-rho.vercel.app/api/v1/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cnic: data.cnic,
            email: data.email,
            userName: data.userName,
          }),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success("Your Account Created Successfully. Check your Email.");
        navigate("/login");
      } else {
        toast.error(result?.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error");
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
            onSubmit={handleSubmit(onSubmits)}
            className="flex flex-col gap-3 items-center bg-white shadow-2xl  p-15 rounded-2xl w-full max-w-md"
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
              id="cnic"
              type="number"
              {...register("cnic")}
              className="px-3 py-2 focus:outline-none border border-gray-300 focus:ring-indigo-700 focus:ring-2 rounded-lg w-full"
            />
            {errors.cnic && (
              <p className="text-red-500 text-sm">{errors.cnic.message}</p>
            )}
            <input
              placeholder="Enter Email"
              id="email"
              type="email"
              {...register("email")}
              className="px-3 py-2 focus:outline-none border border-gray-300 focus:ring-indigo-700 focus:ring-2 rounded-lg w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <input
              placeholder="Enter Username"
              id="userName"
              type="text"
              {...register("userName")}
              className="px-3 py-2 focus:outline-none border border-gray-300 focus:ring-indigo-700 focus:ring-2 rounded-lg w-full"
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName.message}</p>
            )}
            <button className="px-9 py-2 bg-blue-700 rounded-lg text-white w-full ">
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5 mx-auto text-center " />
              ) : (
                "Submit"
              )}
            </button>
            <Link to="/login">
              <h1 className="text-blue-800">
                Already have an account ? <span>Login</span>
              </h1>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
