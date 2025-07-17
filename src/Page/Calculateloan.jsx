import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../Components/Modal";

const Calculateloan = () => {
  const [subCategory, setSubCategory] = useState("category");
  const [summary, setSummary] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryRef = useRef();
  const subCategoryRef = useRef();
  const amountRef = useRef();
  const depositRef = useRef();
  const loanPeriodRef = useRef();

  const handleCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCategory = categoryRef.current.value;
    const selectedSubCategory = subCategoryRef.current?.value;
    const amount = parseFloat(amountRef.current.value);
    const deposit = parseFloat(depositRef.current.value);
    const loanPeriod = parseFloat(loanPeriodRef.current.value);

    if (isNaN(amount) || isNaN(deposit) || isNaN(loanPeriod)) {
      toast.error("Please fill in all fields correctly");
      return;
    }

    const minDepositVal = amount * 0.3;

    if (deposit < minDepositVal) {
      toast.error("Provide at least 30% of the loan amount as a deposit");
    }

    const loanAmount = amount - deposit;
    const monthlyInstallment = loanAmount / (loanPeriod * 12);

    const data = {
      selectedCategory,
      selectedSubCategory,
      amount,
      deposit,
      loanPeriod,
      monthlyInstallment: monthlyInstallment.toFixed(0),
      minDeposit: minDepositVal.toFixed(0),
    };

    setSummary(data);
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <h1 className="text-center text-3xl mb-5 font-medium">Calculate Loan</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side - Form */}
        <div className="bg-white shadow-md rounded-xl p-8 w-full">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <select
              ref={categoryRef}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700"
              onChange={handleCategoryChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="wedding">Wedding Loan</option>
              <option value="education">Education Loan</option>
              <option value="business">Business Loan</option>
              <option value="home">Home Construction Loan</option>
            </select>

            {/* Subcategories */}
            {["wedding", "education", "business", "home"].includes(
              subCategory
            ) && (
              <select
                ref={subCategoryRef}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Sub Category
                </option>
                {subCategory === "wedding" && (
                  <>
                    <option value="Valima">Valima</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Jahez">Jahez</option>
                    <option value="Valima Food">Valima Food</option>
                  </>
                )}
                {subCategory === "education" && (
                  <>
                    <option value="University Fees">University Fees</option>
                    <option value="Child Fees">Child Fees</option>
                  </>
                )}
                {subCategory === "business" && (
                  <>
                    <option value="Buy Stall">Buy Stall</option>
                    <option value="Rent For Shop">Rent For Shop</option>
                  </>
                )}
                {subCategory === "home" && (
                  <>
                    <option value="Finishing">Finishing</option>
                    <option value="Structure">Structure</option>
                    <option value="Loan">Loan</option>
                  </>
                )}
              </select>
            )}

            <input
              ref={amountRef}
              type="number"
              placeholder="Amount (PKR)"
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700"
            />

            <input
              ref={depositRef}
              type="number"
              placeholder="Initial Deposit"
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700"
            />

            <input
              ref={loanPeriodRef}
              type="number"
              placeholder="Loan Period (in years)"
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700"
            />

            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Calculate
            </button>
          </form>
        </div>

        {/* Right Side - Output */}
        <div className="bg-white shadow-md rounded-xl p-8 w-full">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Loan Summary
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Money Borrowed:</span>
              <span>{summary.amount ? `Rs. ${summary.amount}` : "-"}</span>
            </div>
            <div className="flex justify-between">
              <span>Initial Deposit:</span>
              <span>{summary.deposit ? `Rs. ${summary.deposit}` : "-"}</span>
            </div>
            <div className="flex justify-between">
              <span>Loan Period:</span>
              <span>
                {summary.loanPeriod ? `${summary.loanPeriod} Years` : "-"}
              </span>
            </div>
            <div className="flex justify-between font-bold text-blue-700">
              <span>Monthly Installment:</span>
              <span>
                {summary.monthlyInstallment
                  ? `Rs. ${summary.monthlyInstallment}`
                  : "-"}
              </span>
            </div>
            {summary.deposit >= summary.minDeposit && (
              <>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                  >
                    Proceed
                  </button>
                </div>
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculateloan;
