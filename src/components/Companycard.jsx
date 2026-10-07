
import React from "react";

const CompanyCard = ({ company }) => {
  return (
    <div
      className="
        
        group
        bg-white
        border border-gray-200
        rounded-2xl
        p-7
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-2
        hover:border-blue-200
        transition-all
        duration-300
      "
    >

      
      <div
        className="
          w-16 h-16
          bg-blue-50
          text-blue-600
          rounded-2xl
          flex items-center justify-center
          text-2xl font-bold
          mb-6
          border border-blue-100
          group-hover:bg-blue-600
          group-hover:text-white
          group-hover:scale-110
          transition-all
          duration-300
        "
      >
        {company.name.charAt(0)}
      </div>

      
      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
        {company.name}
      </h3>

     
      <div className="flex items-center gap-2 text-gray-500 mt-4">
        <span className="text-blue-500">📍</span>
        <span>{company.location}</span>
      </div>

      
      <div className="flex items-center gap-2 mt-3">
        <span className="text-blue-500">💼</span>

        <span className="text-blue-600 font-semibold">
          {company.jobs} Open Jobs
        </span>
      </div>

      
      <div className="border-t border-gray-100 my-6"></div>

      
      <button
        className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-blue-700
          hover:shadow-lg
          hover:shadow-blue-200
          active:scale-95
          transition-all
          duration-200
        "
      >
        View Company
      </button>

    </div>
  );
};

export default CompanyCard;

