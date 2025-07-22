import React from "react";

const Dashboardcard = ({ title, count }) => {
  return (
    <>
      <div className="w-full bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
        <div className="flex flex-col items-start sm:items-center space-y-2">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <p className="text-3xl font-bold text-blue-700">{count}</p>
        </div>
      </div>
    </>
  );
};

export default Dashboardcard;
