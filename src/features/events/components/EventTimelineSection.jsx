import React from "react";
import { TimelineItemAdakom } from "./TimelineItemAdakom";
import { motion } from "framer-motion";
import { useEventService } from "../hooks/useEventService";
import { RevealOnScroll } from "../../../lib/motion";

export default function EventTimelineSection() {
  const { events, loading } = useEventService();
  if (loading) return <p className="text-center py-20">Memuat event...</p>;

  const today = new Date();

  const upcoming = events.filter(e => new Date(e.tanggal_mulai) >= today);
  const past = events.filter(e => new Date(e.tanggal_mulai) < today);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <RevealOnScroll>
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* UPCOMING EVENTS */}
        {upcoming.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-secondary mb-8 border-l-4 border-primary pl-4">
              Akan Datang
            </h3>

            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {upcoming.map((ev) => (
                <TimelineItemAdakom key={ev.id} item={ev} />
              ))}
            </motion.div>
          </>
        )}

        {/* FINISHED EVENTS */}
        {past.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-secondary my-16 border-l-4 border-gray-400 pl-4">
              Telah Selesai
            </h3>

            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {past.map((ev) => (
                <TimelineItemAdakom key={ev.id} item={ev} />
              ))}
            </motion.div>
          </>
        )}

      </div>
    </section>
    </RevealOnScroll>
  );
}
