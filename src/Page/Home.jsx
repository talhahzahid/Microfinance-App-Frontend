import React from "react";
import Categorycard from "../Components/Categorycard";

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
      {/* main container */}
      <div className="min-h-screen py-25">
        <h1 className="text-center mb-3 text-2xl font-medium">
          What Loan App Offer
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-2">
          {categoryList.map((item, index) => {
            return (
              <div key={index}>
                <Categorycard
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
