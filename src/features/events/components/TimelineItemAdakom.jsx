import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, Clock } from "lucide-react";
import Button from "../../../components/ui/Button";

export const TimelineItemAdakom = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const formatWaktu = (time) => time?.slice(0, 5);

  const variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div
      ref={ref}
      className="relative flex gap-4 sm:gap-6 pl-5 sm:pl-10"
    >
      {/* Vertical Line */}
      <div className="absolute left-3 sm:left-5 top-6 h-full w-px bg-gray-300" />

      {/* Dot */}
      <div className="z-10 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-secondary shadow-md">
        <CalendarDays size={20} />
      </div>

      {/* Card */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex-1 pb-12"
      >
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">

          {/* Poster */}
          <div className="w-full lg:w-1/3 bg-gray-100">
            {item.gambar_url ? (
              <img
                src={item.gambar_url}
                alt={item.judul}
                className="h-52 sm:h-64 lg:h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="h-52 flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 flex flex-col flex-1">

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === "buka"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {item.status === "buka"
                  ? "Pendaftaran Dibuka"
                  : "Pendaftaran Ditutup"}
              </span>

              {item.type && (
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase">
                  {item.type}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-secondary leading-snug">
              {item.judul}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-none
  sm:line-clamp-3">
              {item.deskripsi}
            </p>

            {/* Date */}
            <div className="mt-4 border-t border-gray-200 pt-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                <Clock size={16} className="text-primary" />
                <span>
                  {item.tanggal_mulai_formatted}
                  {item.waktu_mulai && ` • ${formatWaktu(item.waktu_mulai)} WIB`}
                </span>
              </div>
            </div>

            {/* CTA */}
            {item.url_cta && (
              <Button
                href={item.url_cta}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="mt-5 w-full sm:w-auto self-start font-bold"
              >
                Daftar Sekarang
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
