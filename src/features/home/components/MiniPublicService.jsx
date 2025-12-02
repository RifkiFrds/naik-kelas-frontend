import { Briefcase, Building2 } from "lucide-react";
import PublicServiceCard from "../components/PublicServiceCard";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../lib/motion";

export default function MiniPublicService() {
  return (
    <section className="py-20 bg-[#F0F0F0]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary text-center">
            Semua yang Bisnismu Butuh, Ada di <span className="text-primary">Naik Kelas</span>
          </h2>

          <p className="text-gray-600 text-center mt-3 max-w-xl mx-auto">
            Empat layanan utama kami siap bantu kamu belajar, berbisnis, dan berkembang lebih cepat.
          </p>
        </FadeInUp>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          
          <StaggerItem>
            <PublicServiceCard
              icon={<Briefcase size={32} className="text-secondary" />}
              title="Legalitas & Sertifikasi"
              description="Urus izin usaha, PIRT, NIB, merek dagang, dan BPOM. Harga mulai Rp 1,9 Juta"
            />
          </StaggerItem>

          <StaggerItem>
            <PublicServiceCard
              icon={<Building2 size={32} className="text-secondary" />}
              title="Coworking Space"
              description="Ruang kerja kreatif dan nyaman di pusat kota. Cocok untuk tim startup dan freelancer."
            />
          </StaggerItem>

        </StaggerContainer>

      </div>
    </section>
  );
}
