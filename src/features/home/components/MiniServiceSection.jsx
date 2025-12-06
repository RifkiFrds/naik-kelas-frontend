import { useServiceList } from "../hooks/useServiceList";
import ServiceCard from "../components/ServiceCard";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../../lib/motion";

export default function MiniServiceSection() {
  const { services, loading } = useServiceList();

  if (loading) return <p className="text-center py-10">Memuat layanan...</p>;

  return (
    <section className="py-20 bg-[#F0F0F0]">
      <div className="container mx-auto px-6">
        
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center">
            Langkah Nyata untuk Bisnismu Naik Level
          </h2>
          <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
            Empat layanan utama kami siap bantu kamu belajar, berbisnis, dan berkembang lebih cepat.
          </p>
        </FadeInUp>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:text-sm gap-6 mt-12">
          {services.map((item, i) => (
            <StaggerItem key={i}>
              <ServiceCard
                title={item.judul_bisnis}
                description={item.deskripsi}
                image={item.gambar_url}
                urlCta={item.url_cta || "#"}
                ctaText={item.ctaText}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
