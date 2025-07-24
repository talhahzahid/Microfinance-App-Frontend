import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleApplication = () => {
  const [loading, setLoading] = useState(false);
  const [loadingReject, setLoadingReject] = useState(false);
  const fullNameRef = useRef();
  const fatherNameRef = useRef();
  const applicantCnicRef = useRef();
  const dobRef = useRef();
  const genderRef = useRef();
  const applicantEmailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();

  // Guarantor 1
  const g1FullNameRef = useRef();
  const g1RelationRef = useRef();
  const g1EmailRef = useRef();
  const g1PhoneRef = useRef();
  const g1CnicRef = useRef();
  const g1DobRef = useRef();
  const g1AddressRef = useRef();

  // Guarantor 2
  const g2FullNameRef = useRef();
  const g2RelationRef = useRef();
  const g2EmailRef = useRef();
  const g2PhoneRef = useRef();
  const g2CnicRef = useRef();
  const g2DobRef = useRef();
  const g2AddressRef = useRef();

  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getSingleApplication();
  }, []);
  const getSingleApplication = async () => {
    try {
      const response = await fetch(
        `https://microfinance-app-backend-rho.vercel.app/api/v2/loanform/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setData(data);
        const app = data;
        fullNameRef.current.value = app.applicantInfo.fullName;
        fatherNameRef.current.value = app.applicantInfo.fatherName;
        applicantCnicRef.current.value = app.applicantInfo.cnic;
        dobRef.current.value = app.applicantInfo.dateOfBirth.split("T")[0];
        genderRef.current.value = app.applicantInfo.gender;
        applicantEmailRef.current.value = app.applicantInfo.email;
        phoneRef.current.value = app.applicantInfo.phone;
        cityRef.current.value = app.applicantInfo.city;
        addressRef.current.value = app.applicantInfo.address;

        // Guarantor 1
        const g1 = app.guardians[0];
        g1FullNameRef.current.value = g1.fullName;
        g1RelationRef.current.value = g1.relation;
        g1EmailRef.current.value = g1.email;
        g1PhoneRef.current.value = g1.phone;
        g1CnicRef.current.value = g1.cnic;
        g1DobRef.current.value = g1.Dob;
        g1AddressRef.current.value = g1.address;

        // Guarantor 2
        const g2 = app.guardians[1];
        g2FullNameRef.current.value = g2.fullName;
        g2RelationRef.current.value = g2.relation;
        g2EmailRef.current.value = g2.email;
        g2PhoneRef.current.value = g2.phone;
        g2CnicRef.current.value = g2.cnic;
        g2DobRef.current.value = g2.Dob;
        g2AddressRef.current.value = g2.address;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    // setLoading(true);
  };
  const updateLoanRequestStatus = async (id, status) => {
    console.log(id);
    console.log(status);

    try {
      const response = await fetch(
        `https://microfinance-app-backend-rho.vercel.app/api/v2/loanform/status/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );
      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-25 min-h-screen grid grid-cols-12 gap-5 px-4">
        {/* Box 1: Form */}
        <div className="col-span-12 md:col-span-8 ">
          <div className="border p-5 bg-white rounded-xl shadow-md">
            <form onSubmit={handleSubmit}>
              <h1 className="font-medium text-2xl mb-3">Loan Application</h1>

              {/* Applicant Info */}
              <div className="grid grid-cols-12 gap-4 mb-3">
                <div className="lg:col-span-6 col-span-12">
                  <input
                    type="text"
                    placeholder="Full Name"
                    ref={fullNameRef}
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <input
                    type="text"
                    placeholder="Father Name"
                    ref={fatherNameRef}
                    disabled
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
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <input
                    type="date"
                    ref={dobRef}
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <input
                    type="text"
                    ref={cityRef}
                    disabled
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
                    disabled
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
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <select
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                    ref={g1RelationRef}
                    disabled
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
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    ref={g1PhoneRef}
                    disabled
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
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <input
                    type="date"
                    ref={g1DobRef}
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 mb-3">
                <div className="col-span-12">
                  <textarea
                    placeholder="Enter Address"
                    ref={g1AddressRef}
                    disabled
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
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <select
                    name=""
                    id=""
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                    ref={g2RelationRef}
                    disabled
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
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    ref={g2PhoneRef}
                    disabled
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
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <input
                    type="date"
                    ref={g2DobRef}
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 mb-3">
                <div className="col-span-12">
                  <textarea
                    placeholder="Enter Address"
                    ref={g2AddressRef}
                    disabled
                    className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Box 2: Loan Summary */}
        <div className="col-span-12 md:col-span-4 border h-fit bg-white rounded-xl shadow-md p-3">
          <h1 className="text-center font-medium text-2xl mb-3">
            Loan Details
          </h1>
          <div className="space-y-4 border p-4 text-sm rounded-lg">
            <div className="flex justify-between">
              <span className="font-medium">Loan Type:</span>
              <span className="font-medium">
                {data?.loanDetails?.loanType || "-"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Loan Purpose:</span>
              <span className="font-medium">
                {data?.loanDetails?.loanPurpose || "-"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Loan Request:</span>
              <span className="font-medium">
                {data?.loanDetails?.loanAmount || "-"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Initial Deposit:</span>
              <span className="font-medium">
                {data?.loanDetails?.minDeposit || "-"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Loan Period:</span>
              <span className="font-medium">
                {data?.loanDetails?.durationMonths
                  ? `${data?.loanDetails?.durationMonths} year`
                  : "-"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Monthly Installment:</span>
              <span className="font-medium">
                {data.monthlyInstalment || "-"}
              </span>
            </div>
          </div>
          <div className="py-7 flex justify-center gap-3">
            <button
              onClick={async () => {
                setLoading(true);
                await updateLoanRequestStatus(data._id, "approved");
                setLoading(false);
              }}
              className="px-2 py-2 bg-green-700 rounded-lg text-white cursor-pointer"
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                "Approved"
              )}
            </button>
            <button
              onClick={async () => {
                setLoadingReject(true);
                await updateLoanRequestStatus(data._id, "rejected");
                setLoadingReject(false);
              }}
              className="px-2 py-2 bg-red-700 rounded-lg text-white cursor-pointer"
            >
              {loadingReject ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                "Reject"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleApplication;
