import VisiCard from "../components/VisiCard";
import MisiCard from "../components/MisiCard";
import { RevealOnScroll } from "../../../lib/motion";

export default function VisiMisiSection() {
  return (
    <RevealOnScroll>
    <section className="py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
         <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
            Tentang ADAKOM
          </h2>
          <p className="text-primary font-extrabold text-3xl md:text-4xl mt-2">
            Naik Kelas
          </p>
          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Naik Kelas adalah platform pengembangan bisnis dan karier yang
            menghadirkan solusi lengkap dari edukasi, kemitraan, hingga layanan
            profesional. Kami menjadi jembatan antara pengetahuan dan praktik
            nyata agar siapa pun bisa berkembang: dari pemula menjadi profesional,
            dari usaha kecil menjadi brand besar.
          </p>
        </div>

        {/* Layout Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-[350px,1fr] gap-10">
          <VisiCard />
          <MisiCard />
        </div>

      </div>
    </section>
    </RevealOnScroll>
  );
}
