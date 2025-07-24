import React, { useEffect, useState } from "react";
import Dashboardcard from "../Components/Dashboardcard";
import { EyeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [allApplication, setAllApplication] = useState([]);
  const [filterdAll, setFilterd] = useState([]);
  const [loanStats, setLoanStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  useEffect(() => {
    viewAllApplication();
    viewLoanStats();
  }, []);

  const viewAllApplication = async () => {
    try {
      const response = await fetch(
        `https://microfinance-app-backend-rho.vercel.app/api/v2/viewrequest`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setAllApplication(data.getAllForm);
        setFilterd(data.getAllForm);
        console.log(data.getAllForm);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const viewLoanStats = async () => {
    try {
      const response = await fetch(
        "https://microfinance-app-backend-rho.vercel.app/api/v2/loanform/stats",
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
        setLoanStats(data.data); // data should have total, approved, pending, rejected
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.id;
    const filtered = allApplication.filter((app) => {
      if (field === "cnic") {
        return app.applicantInfo.cnic.includes(value);
      }
      if (field === "email") {
        return app.applicantInfo.email
          .toLowerCase()
          .includes(value.toLowerCase());
      }
      return false;
    });

    setFilterd(filtered);
  };

  return (
    <div className="min-h-screen">
      {/* Dashboard cards */}
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <Dashboardcard title="Total Loan Requests" count={loanStats.total} />
        <Dashboardcard title="Approved Loans" count={loanStats.approved} />
        <Dashboardcard title="Pending Approvals" count={loanStats.pending} />
        <Dashboardcard
          title="Rejected Applications"
          count={loanStats.rejected}
        />
      </div>

      <div className="py-10">
        <h1 className="font-medium text-xl mb-4">Filtered Application</h1>
        <div className="border p-4 rounded-lg bg-white shadow-lg grid grid-cols-12 gap-2">
          <div className="col-span-4">
            <label htmlFor="cnic" className="mb-3">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              onChange={handleChange}
              placeholder="Search Enter Cnic"
              className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
            />
          </div>
          <div className="col-span-4">
            <label htmlFor="email" className="mb-3">
              Email
            </label>
            <input
              type="text"
              id="email"
              onChange={handleChange}
              placeholder="Search Email"
              className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Application Table */}
      <div className="py-10">
        <div className="shadow-xl bg-white p-3   border rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Number</th>
                  <th className="px-4 py-2 border">CNIC</th>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">View</th>
                </tr>
              </thead>
              <tbody>
                {filterdAll.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">
                      {item.applicantInfo?.fullName.slice(0, 6) || "-"}....
                    </td>
                    <td className="px-4 py-2 border">
                      {item.applicantInfo?.email || "-"}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.applicantInfo?.phone || "-"}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.applicantInfo?.cnic || "-"}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.applicantInfo?.city || "-"}
                    </td>
                    <td
                      className={`px-4 py-2 border font-semibold ${
                        item?.status === "approved"
                          ? "text-green-600"
                          : item?.status === "rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {item?.status?.charAt(0).toUpperCase() +
                        item?.status?.slice(1)}
                    </td>
                    <td className="px-4 py-2 border cursor-pointer">
                      <Link to={`/singleApplication/${item._id}`}>
                        <EyeIcon className="h-5 w-5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {allApplication.length === 0 && (
              <p className="text-center mt-4 text-gray-500">
                No applications found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
