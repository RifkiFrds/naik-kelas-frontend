import React from "react";
import { Star } from "lucide-react";

export default function TestimoniCard({ name, title, review }) {
  return (
    <div className="min-w-[320px] md:min-w-[360px] border border-gray-300 rounded-xl p-6 shadow-sm mx-4">
      <h3 className="font-semibold text-secondary">{name},</h3>
      <p className="text-gray-600 text-sm mb-2">{title}</p>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Star key={i} size={16} fill="#FFAE19" stroke="#FFAE19" />
        ))}
      </div>

      <p className="text-gray-700 italic text-sm leading-relaxed">
        “{review}”
      </p>
    </div>
  );
}
