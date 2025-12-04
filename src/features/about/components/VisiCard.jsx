import { Target } from "lucide-react";
import { StaggerItem } from "../../../lib/motion";

export default function VisiCard() {
  return (
    <StaggerItem>
    <div className="border border-gray-300 rounded-xl p-10 w-full max-w-md text-center shadow-sm hover:shadow-md  mx-auto">
      {/* Icon */}
      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
        <Target size={40} className="text-secondary" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-extrabold text-secondary mb-4">Visi</h3>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Mendorong pertumbuhan wirausaha & profesional Indonesia agar siap bersaing di era digital dan global.
      </p>
    </div>
    </StaggerItem>
  );
}
