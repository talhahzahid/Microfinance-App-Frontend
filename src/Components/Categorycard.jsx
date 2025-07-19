import React from "react";
import { Link } from "react-router-dom";

const Categorycard = ({ title, description }) => {
  return (
    <div className="border border-white w-full max-w-xs min-h-[270px] p-6 rounded-2xl bg-white shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-semibold mb-3 text-gray-800">{title}</h1>
        <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
      </div>
      <div className="mt-6">
        <Link to="/calculateloan">
          <button className="w-full px-4 py-2 cursor-pointer bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categorycard;
