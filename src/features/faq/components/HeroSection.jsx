import { FadeInUp } from "../../../lib/motion";

export default function HeroSection() {
  return (
    <section className="relative py-10 bg-gradient-to-b from-[#FFF7E1] bg-w-full flex items-center -mt-4 sm:-mt-6 md:-mt-4 pt-4 justify-center
          h-[40vh] sm:h-[50vh] md:h-[60vh]
          min-h-[320px] md:min-h-[400px]
          overflow-hidden">
      <div className="container mx-auto px-6 text-center">

        <FadeInUp>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.25] md:leading-[1.4] font-bold text-secondary leading-tight">
            PERTANYAAN YANG SERING
            <br />
            <span className="text-primary">DITANYAKAN (FAQ)</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Semua informasi lengkap mengenai layanan, program, dan ekosistem ADAKOM Naik Kelas tersedia di sini.
          </p>
        </FadeInUp>

      </div>
    </section>
  );
}
