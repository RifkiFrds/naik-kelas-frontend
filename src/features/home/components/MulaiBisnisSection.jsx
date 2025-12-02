import Button from "../../../components/ui/Button";
import FeatureListItem from "../components/FeatureListItem";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../lib/motion";

export default function MulaiBisnisSection() {
  return (
    <section className="py-10 bg-[#F0F0F0]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <FadeInUp className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-snug">
            Mulai Bisnis Tanpa Harus <br /> Pusing dari Nol
          </h2>

          <p className="text-gray-600 mt-4">
            Kami sediakan paket usaha siap jalan, sistem operasional rapi,
            dan dukungan branding lengkap.
          </p>

          <Button variant="secondary" size="lg" className="mt-6">
            Ajukan Kerjasama Sekarang
          </Button>
        </FadeInUp>

        {/* Right List Features */}
        <StaggerContainer className="flex flex-col gap-6">
          <StaggerItem>
            <FeatureListItem
              title="Paket Usaha Lengkap"
              description="Booth, bahan, SOP, semua disiapkan."
            />
          </StaggerItem>

          <StaggerItem>
            <FeatureListItem
              title="Sistem Siap Operasi"
              description="Training, manajemen stok, hingga laporan."
            />
          </StaggerItem>

          <StaggerItem>
            <FeatureListItem
              title="Branding & Promosi"
              description="Dapatkan dukungan promosi online."
            />
          </StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  );
}
