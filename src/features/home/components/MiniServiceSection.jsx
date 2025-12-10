import { useServiceList } from "../hooks/useServiceList";
import ServiceCard from "../components/ServiceCard";
import { FadeInUp } from "../../../lib/motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function MiniServiceSection() {
  const { services, loading } = useServiceList();
  const controls = useAnimation();

  // ====== FIX: RESPONSIVE DEVICE CHECK ======
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // ====== START MARQUEE ONLY ON DESKTOP ======
  useEffect(() => {
    if (!isMobile) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { repeat: Infinity, duration: 15, ease: "linear" },
      });
    } else {
      controls.stop(); // HENTIKAN ketika mobile
    }
  }, [controls, isMobile]);

  if (loading) return <p className="text-center py-10">Memuat layanan...</p>;

  return (
    <section className="py-20 bg-[#F0F0F0]">
      <div className="container mx-auto px-6">

        <FadeInUp>
          <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
            LANGKAH NYATA UNTUK <span className="text-primary">BISNISMU</span> NAIK LEVEL
          </h2>
          <p className="text-gray-600 text-center mt-3 max-w-3xl mx-auto">
            Layanan terpadu kami siap membantu kamu belajar, memulai, dan mengembangkan bisnis dengan lebih cepat & terstruktur.
          </p>
        </FadeInUp>

        {/* ====== DESKTOP: AUTO MARQUEE ====== */}
        {!isMobile && (
          <motion.div
            className="relative mt-12 overflow-hidden"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
              controls.start({
                x: ["0%", "-50%"],
                transition: { repeat: Infinity, duration: 15, ease: "linear" },
              })
            }
          >
            <motion.div className="flex gap-6" animate={controls}>
              {[...services, ...services].map((item, i) => (
                <motion.div key={i} className="shrink-0 w-80">
                  <ServiceCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    urlCta={item.urlCta}
                    ctaText={item.ctaText}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* ====== MOBILE: SCROLL MANUAL ====== */}
        {isMobile && (
          <div className="mt-12 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {services.map((item, i) => (
              <div key={i} className="shrink-0 w-[260px] sm:w-72">
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  urlCta={item.urlCta}
                  ctaText={item.ctaText}
                />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
