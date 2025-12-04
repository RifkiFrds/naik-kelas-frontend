import { ClipboardCheck } from "lucide-react";
import { StaggerItem } from "../../../lib/motion";

export default function MisiCard() {
  return (
    <StaggerItem>
    <div className="border border-gray-300 rounded-xl p-10 w-full text-left shadow-sm hover:shadow-md ">
      {/* Icon & Title Center */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <ClipboardCheck size={40} className="text-secondary" />
        </div>

        <h3 className="text-2xl font-extrabold text-secondary">Misi</h3>
      </div>

      {/* List */}
      <ul className="space-y-2 text-gray-700 text-lg list-disc pl-6">
        <li>Menyediakan edukasi & layanan bisnis yang praktis dan aplikatif</li>
        <li>Membangun komunitas kolaboratif bagi pebisnis & kreator</li>
        <li>Membantu UMKM naik kelas melalui kemitraan, teknologi, & inovasi</li>
      </ul>
    </div>
    </StaggerItem>
  );
}
