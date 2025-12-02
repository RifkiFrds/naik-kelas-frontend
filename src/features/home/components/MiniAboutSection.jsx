import { Users, ShieldCheck, MonitorSmartphone, UserCheck, Layers } from "lucide-react";
import { RevealOnScroll } from "../../../lib/motion";

export default function MiniAboutSection() {
  const features = [
    {
      title: "Mentor Profesional",
      icon: <UserCheck size={34} className="text-secondary" />,
    },
    {
      title: "Solusi Terintegrasi",
      icon: <Layers size={34} className="text-secondary" />,
    },
    {
      title: "Komunitas Aktif",
      icon: <Users size={34} className="text-secondary" />,
    },
    {
      title: "Transparan & Aman",
      icon: <ShieldCheck size={34} className="text-secondary" />,
    },
    {
      title: "Support Cepat & Responsif",
      icon: <MonitorSmartphone size={34} className="text-secondary" />,
    },
  ];

  return (
    <RevealOnScroll>
    <section className="py-10 bg-[#F0F0F0]">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="
          text-3xl md:text-4xl font-extrabold tracking-tight 
          text-secondary leading-tight
        ">
          Naik Kelas, Gerakan <span className="text-primary">Bisnis & Karier</span> Masa Depan
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-base leading-relaxed">
          Kami hadir untuk bantu kamu tumbuh dari pelaku usaha kecil, profesional, hingga startup.
          Edukasi, kemitraan, dan solusi bisnis praktis kami rancang agar kamu bisa naik level setiap hari.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {features.map((item, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center shadow-md">
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-secondary">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
}
