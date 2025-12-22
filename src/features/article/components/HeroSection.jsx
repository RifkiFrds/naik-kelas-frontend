import { FadeInUp } from "../../../lib/motion";

export default function HeroSection() {
  return (
    <FadeInUp delay={0.15}>
      <section className="py-16 md:py-10 to-gray-50">
        <div className="container mx-auto px-4 text-center">

          {/* Eyebrow */}
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest 
            text-primary uppercase">
            Artikel & Insight
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl 
            font-bold text-secondary leading-[1.2] md:leading-[1.5] mb-6">
            Temukan Insight Terbaik Untuk  <br />
            <span className="text-primary">Tumbuh Lebih Hebat</span>
          </h1>

          {/* Divider */}
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg 
            max-w-3xl mx-auto leading-relaxed">
            Kumpulan artikel pilihan seputar teknologi, karier, pengembangan diri,
            dan pengalaman belajar bersama ADAKOM Naik Kelas.
          </p>

        </div>
      </section>
    </FadeInUp>
  );
}
