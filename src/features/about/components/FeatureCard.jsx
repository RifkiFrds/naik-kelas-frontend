import React from "react";

export default function FeatureCard({ icon, title, subtitle }) {
  return (
    <div className="border border-gray-300 rounded-xl p-6 w-full text-center hover:shadow-md transition-shadow">
      <div className="w-14 h-14 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-secondary text-lg">{title}</h4>
      <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
    </div>
  );
}
