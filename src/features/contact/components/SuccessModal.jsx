import { CheckCircle } from "lucide-react";

export default function SuccessModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-[90%] max-w-sm text-center animate-fade-in-up">
        
        <CheckCircle className="mx-auto text-green-500" size={48} />

        <h3 className="mt-3 text-xl font-bold text-secondary">
          Pesan Berhasil Terkirim!
        </h3>

        <p className="text-gray-600 text-sm mt-1">
          Tim ADAKOM akan menghubungi Anda dalam 1×24 jam.
        </p>

        <button
          onClick={onClose}
          className="mt-5 bg-primary text-secondary font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
