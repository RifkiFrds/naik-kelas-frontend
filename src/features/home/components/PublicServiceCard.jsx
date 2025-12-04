import React from "react";

export default function PublicServiceCard({ icon, title, description }) {
  return (
    <div className="border border-gray-300 rounded-xl shadow-sm p-10 text-center hover:shadow-md transition-all duration-200">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-secondary">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}
