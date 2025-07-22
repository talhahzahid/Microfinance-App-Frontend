import React from "react";
import Categorycard from "../Components/Categorycard";
import img from "../assets/background.jpg";
import { Link } from "react-router-dom";

const categoryList = [
  {
    title: "Wedding Loans",
    description:
      "Loans for wedding-related expenses such as venue, food, furniture, and other necessary arrangements.",
  },
  {
    title: "Business Startup Loans",
    description:
      "Loans for individuals looking to start their own business, covering expenses like stalls, rent, and assets.",
  },
  {
    title: "Home Construction Loans",
    description:
      "Loans for building and finishing homes, covering structural work and finishing touches.",
  },
  {
    title: "Education Loans",
    description:
      "Loans aimed at supporting education-related expenses such as university and child fees.",
  },
];

const Home = () => {
  return (
    <>
      <div className="min-h-screen py-25 px-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center mb-10">
          <div>
            <img
              src={img}
              alt="Loan Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">
              Welcome to LoanApp
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer fast, flexible, and secure loans to help you achieve your
              goals — whether you're planning a wedding, starting a business,
              building a home, or investing in education.
            </p>
            <p className="mt-4 text-gray-500">
              No hidden fees. Quick approvals. Trusted by thousands.
            </p>
            <Link to="/calculateloan">
              <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition cursor-pointer">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <h1 className="text-center mb-6 text-3xl font-medium">
          What Loan App Offers
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 px-2">
          {categoryList.map((item, index) => (
            <Categorycard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
