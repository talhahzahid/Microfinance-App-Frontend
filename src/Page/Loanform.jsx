import { Loader } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Loanform = () => {
  const [loanDetail, setLoanDetails] = useState({});
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loanData = JSON.parse(localStorage.getItem("loanData")) || {};
    setLoanDetails(loanData);
    return () => {
      localStorage.removeItem("loanData");
      console.log("Component unmounted — loanData removed.");
    };
  }, []);

  useEffect(() => {
    console.log("Updated loan details:", loanDetail);
  }, [loanDetail]);

  const fullNameRef = useRef();
  const fatherNameRef = useRef();
  const applicantCnicRef = useRef();
  const dobRef = useRef();
  const genderRef = useRef();
  const applicantEmailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();

  // Guarantor 1 Refs
  const g1FullNameRef = useRef();
  const g1RelationRef = useRef();
  const g1EmailRef = useRef();
  const g1PhoneRef = useRef();
  const g1CnicRef = useRef();
  const g1DobRef = useRef();
  const g1AddressRef = useRef();

  // Guarantor 2 Refs
  const g2FullNameRef = useRef();
  const g2RelationRef = useRef();
  const g2EmailRef = useRef();
  const g2PhoneRef = useRef();
  const g2CnicRef = useRef();
  const g2DobRef = useRef();
  const g2AddressRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      applicantInfo: {
        fullName: fullNameRef.current.value,
        fatherName: fatherNameRef.current.value,
        cnic: applicantCnicRef.current.value,
        dateOfBirth: dobRef.current.value,
        gender: genderRef.current.value,
        email: applicantEmailRef.current.value,
        phone: phoneRef.current.value,
        city: cityRef.current.value,
        address: addressRef.current.value,
      },
      loanDetails: {
        loanType: loanDetail.category,
        loanPurpose: loanDetail.subcategory,
        durationMonths: loanDetail.durationYears,
        loanAmount: loanDetail.initialDeposit,
        monthlyInstalment: loanDetail.monthlyInstallment,
        minDeposit: loanDetail.minDeposit,
      },
      guardians: [
        {
          fullName: g1FullNameRef.current.value,
          relation: g1RelationRef.current.value,
          email: g1EmailRef.current.value,
          phone: g1PhoneRef.current.value,
          cnic: g1CnicRef.current.value,
          Dob: g1DobRef.current.value, // ✅ capital D
          address: g1AddressRef.current.value,
        },
        {
          fullName: g2FullNameRef.current.value,
          relation: g2RelationRef.current.value,
          email: g2EmailRef.current.value,
          phone: g2PhoneRef.current.value,
          cnic: g2CnicRef.current.value,
          Dob: g2DobRef.current.value, // ✅ capital D
          address: g2AddressRef.current.value,
        },
      ],
    };
    setLoading(true);
    try {
      const response = await fetch(
        `https://microfinance-app-backend-rho.vercel.app/api/v2/addLoan`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success(
          result.message || "Loan application submitted successfully."
        );
        navigate("/home");
      } else {
        toast.error(result.error || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-25 min-h-screen grid grid-cols-12 gap-5 px-4">
      {/* Box 1: Form */}
      <div className="col-span-12 md:col-span-8">
        <div className="border p-5 bg-white rounded-xl shadow-md">
          <form onSubmit={handleSubmit}>
            <h1 className="font-medium text-2xl mb-3">
              Loan Request Submission
            </h1>

            {/* Applicant Info */}
            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="Full Name"
                  ref={fullNameRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="Father Name"
                  ref={fatherNameRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Cnic"
                  ref={applicantCnicRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="date"
                  ref={dobRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <select
                  name=""
                  id=""
                  defaultValue=""
                  ref={genderRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  F
                >
                  <option value="" disabled>
                    Select Relation
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="email"
                  ref={applicantEmailRef}
                  placeholder="Email"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Phone Number"
                  ref={phoneRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  ref={cityRef}
                  placeholder="City"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 mb-3">
              <div className="col-span-12">
                <textarea
                  placeholder="Enter Address"
                  ref={addressRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                ></textarea>
              </div>
            </div>

            {/* Guarantor 1 */}
            <h1 className="font-bold mb-3 text-md">
              Guarantor's Information One
            </h1>
            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="Full Name"
                  ref={g1FullNameRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <select
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  ref={g1RelationRef}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Relation
                  </option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="email"
                  placeholder="Enter Email"
                  ref={g1EmailRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  ref={g1PhoneRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Enter CNIC"
                  ref={g1CnicRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="date"
                  ref={g1DobRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 mb-3">
              <div className="col-span-12">
                <textarea
                  placeholder="Enter Address"
                  ref={g1AddressRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                ></textarea>
              </div>
            </div>

            {/* Guarantor 2 */}
            <h1 className="font-bold mb-3 text-md">
              Guarantor's Information Two
            </h1>
            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="text"
                  placeholder="Full Name"
                  ref={g2FullNameRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <select
                  name=""
                  id=""
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  ref={g2RelationRef}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Relation
                  </option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="email"
                  placeholder="Enter Email"
                  ref={g2EmailRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  ref={g2PhoneRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="number"
                  placeholder="Enter CNIC"
                  ref={g2CnicRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
              <div className="lg:col-span-6 col-span-12">
                <input
                  type="date"
                  ref={g2DobRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 mb-3">
              <div className="col-span-12">
                <textarea
                  placeholder="Enter Address"
                  ref={g2AddressRef}
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="px-3 py-2 w-full bg-blue-700 rounded-lg text-white"
            >
              {Loading ? (
                <Loader className="animate-spin h-5 w-5 m-auto" />
              ) : (
                "Submit Application"
              )}
            </button>
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
