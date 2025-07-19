import React, { useEffect, useState } from "react";

const Loanform = () => {
  const [loanDetail, setLoanDetails] = useState({});

  // Load loan data from localStorage once
  useEffect(() => {
    const loanData = JSON.parse(localStorage.getItem("loanData")) || {};
    setLoanDetails(loanData);
  }, []);

  // Log loanDetail when it updates
  useEffect(() => {
    console.log("Updated loan details:", loanDetail);
  }, [loanDetail]);

  return (
    <div className="py-20 min-h-screen grid grid-cols-12 gap-5 px-4">
      {/* Box 1: Form */}
      <div className="col-span-12 md:col-span-8">
        <div className="border p-5 bg-white rounded-xl shadow-md">
          <form>
            <h1 className="font-medium text-2xl mb-3">
              Loan Request Submission
            </h1>

            {/* Applicant Info */}
            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 mb-3">
              <div className="col-span-12">
                <textarea
                  placeholder="Enter Address"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                ></textarea>
              </div>
            </div>

            {/* Guarantor One */}
            <h1 className="font-bold mb-3 text-md">
              Guarantor's Information One
            </h1>
            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Enter CNIC"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="date"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 mb-3">
              <div className="col-span-12">
                <textarea
                  placeholder="Enter Address"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                ></textarea>
              </div>
            </div>

            {/* Guarantor Two */}
            <h1 className="font-bold mb-3 text-md">
              Guarantor's Information Two
            </h1>
            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Enter CNIC"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="date"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 mb-3">
              <div className="col-span-12">
                <textarea
                  placeholder="Enter Address"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Box 2: Loan Summary */}
      <div className="col-span-12 md:col-span-4 border h-fit bg-white rounded-xl shadow-md p-5">
        <h1 className="text-center font-medium text-2xl mb-3">Loan Details</h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Loan Request:</span>
            <span className="font-medium">{loanDetail.subcategory || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Initial Deposit:</span>
            <span className="font-medium">
              {loanDetail.initialDeposit || "-"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Loan Period:</span>
            <span className="font-medium">
              {loanDetail.durationYears
                ? `${loanDetail.durationYears} year`
                : "-"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Monthly Installment:</span>
            <span className="font-medium">
              {loanDetail.monthlyInstallment || "-"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loanform;
