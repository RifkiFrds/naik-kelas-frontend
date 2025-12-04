import { motion } from "framer-motion";
import TestimoniCard from "../components/TestimoniCard";

export default function TestimoniSection() {

  const testimonials = [
    {
      name: "Rina Putri",
      title: "Founder Minuman Kekinian",
      review:
        "Naik Kelas bantu aku pahami cara scale up bisnis dengan strategi yang realistis. Mentor nya keren banget!",
    },
    {
      name: "Yusuf Rahman",
      title: "UMKM Bandung",
      review:
        "Dari modul Naik Kelas, aku ngerti cara pricing & branding yang bener. Worth every penny!",
    },
    {
      name: "Sari Wulandari",
      title: "BakeLab.id",
      review:
        "Urus legalitas bisnis sekarang gak ribet, semua dibantu dari awal sampai selesai.",
    },
  ];

  // Gandakan array supaya looping halus
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center">
          Cerita Nyata dari Mereka 
          yang Sudah Naik Kelas
        </h2>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden mt-12">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"], 
            }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {doubled.map((item, i) => (
              <TestimoniCard
                key={i}
                name={item.name}
                title={item.title}
                review={item.review}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
