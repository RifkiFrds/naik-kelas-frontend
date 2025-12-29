import React from "react";
import { Award } from "lucide-react";

export default function ValueItem({ text }) {
  return (
    <div className="flex gap-3 items-start p-4 bg-[#FFBC4114] rounded-xl shadow-sm">
      <div className="text-secondary bg-primary rounded-full p-2">
        <Award size={18} strokeWidth={3} />
      </div>
      <p className="text-gray-700 text-sm max-w-lg leading-relaxed mt-1">{text}</p>
    </div>
  );
}
