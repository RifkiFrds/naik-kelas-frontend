import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, Clock } from "lucide-react";
import Button from "../../../components/ui/Button";

export const TimelineItemAdakom = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div ref={ref} className="relative flex items-start gap-5 sm:gap-6 pl-6 sm:pl-10">

      {/* Vertical Line */}
      <div className="absolute left-4 sm:left-5 top-6 h-full w-px bg-gray-300"></div>

      {/* Timeline Dot */}
      <div className="z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-secondary shadow-lg">
        <CalendarDays size={22} />
      </div>

      {/* CARD */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex-grow pb-14"
      >
        <div className="flex flex-col md:flex-row overflow-hidden rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition">

          {/* Image Poster */}
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src={item.gambar_url}
              alt={item.judul}
              className="aspect-[1/5] w-full object-cover md:max-h-[410px]"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col justify-center">

            {/* Status Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === "buka"
                    ? "bg-green-100 text-green-700 animate-pulse"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {item.status === "buka" ? "Pendaftaran Dibuka" : "Pendaftaran Ditutup"}
              </span>

              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                Umum
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold text-secondary leading-snug">
              {item.judul}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              {item.deskripsi}
            </p>

            {/* Date & Time */}
            <div className="mt-5 border-t border-gray-200 pt-4 space-y-3 text-gray-700">
              <div className="flex items-center gap-3 text-sm">
                <Clock size={18} className="text-primary" />
                <span>{item.tanggal_mulai}, {item.waktu_mulai} WIB</span>
              </div>
            </div>

            {/* CTA */}
             {/* CTA */}
            <Button
              href={item.url_cta}
              target="_blank"
              size="md"
              rel="noopener noreferrer"
              className="inline-block w-auto self-start mt-6 text-secondary font-bold px-6 py-2"

            >
              Daftar Sekarang
            </Button>

          </div>
        </div>
      </motion.div>

    </div>
  );
};
