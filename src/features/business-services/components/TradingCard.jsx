import { Building2, Globe2 } from "lucide-react";

export default function TradingCard({ broker }) {
  const isInternasional = broker.tipe_broker?.toLowerCase().includes("internasional");
  const Icon = isInternasional ? Globe2 : Building2;

  const fitur = broker.fitur_unggulan?.split("\n").map((x) => x.trim()).filter(Boolean);

  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-sm max-w-lg mx-auto">
      
      <div className="overflow-hidden rounded-xl mb-4">
        <img src={broker.gambar_url} alt={broker.tipe_broker} className="w-full h-60 object-cover" />
      </div>

      <div className="flex items-center gap-2 text-secondary font-extrabold tracking-wide mb-2 text-[18px] justify-center">
        <div className="bg-primary text-primary p-2 rounded-full flex items-center justify-center">
        <Icon className="text-secondary" size={20} />
        </div>
        <span>BROKER {broker.tipe_broker?.toUpperCase()}</span>
      </div>

      <p className="text-gray-600 text-sm text-center max-w-md mx-auto">
        {broker.deskripsi}
      </p>

      <hr className="my-3 border-primary w-28 mx-auto" />

      <ul className="text-center text-gray-700 text-sm space-y-1">
        {fitur?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center">
        <a
          href={broker.url_cta}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-secondary font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition-all"
        >
          Buat Akun Baru
        </a>
      </div>
    </div>
  );
}
