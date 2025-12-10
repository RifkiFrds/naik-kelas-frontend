import Button from "../../../components/ui/Button";
import FeatureListItem from "../components/FeatureListItem";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../lib/motion";
import { NavLink } from "react-router-dom";

export default function MulaiBisnisSection() {
  return (
    <section className="py-10 bg-[#F0F0F0]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <FadeInUp className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-snug">
            LAYANAN KEMITRAAN
          </h2>

          <p className="text-gray-600 mt-4 ">
           Paket usaha siap jalan lengkap dengan peralatan, SOP, <br/> training tim, manajemen stok, serta dukungan branding & promosi untuk mempercepat penjualan dan memperbesar keuntungan.
          </p>
          <NavLink to="/kemitraan">
          <Button variant="secondary" size="lg" className="mt-6">
            Lihat Detail Lengkap Kemitraan
          </Button>
          </NavLink>
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
