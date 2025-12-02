import { Check } from "lucide-react";

export default function FeatureListItem({ title, description }) {
  return (
    <div className="flex items-start gap-4 bg-[#FFBC4114] p-6 rounded-xl shadow-sm">
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow">
        <Check size={20} strokeWidth={3} className="text-secondary" />
      </div>

      {/* Text */}
      <div>
        <h4 className="text-lg font-semibold text-secondary">{title}</h4>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
