import React from "react";
import { TimelineItemAdakom } from "./TimelineItemAdakom";
import { useEventService } from "../hooks/useEventService";
import { RevealOnScroll } from "../../../lib/motion";

export default function EventTimelineSection() {
  const { events, loading } = useEventService();

  if (loading) {
    return (
      <section className="py-24 text-center text-gray-500">
        Memuat event...
      </section>
    );
  }

  const today = new Date().setHours(0, 0, 0, 0);

  const upcoming = events.filter(
    (e) => new Date(e.tanggal_mulai).getTime() >= today
  );

  const past = events.filter(
    (e) => new Date(e.tanggal_mulai).getTime() < today
  );

  return (
    <RevealOnScroll>
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <>
              <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-8 border-l-4 border-primary pl-4">
                Akan Datang
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {upcoming.map((ev) => (
                  <TimelineItemAdakom key={ev.id} item={ev} />
                ))}
              </div>
            </>
          )}

          {/* Past */}
          {past.length > 0 && (
            <>
              <h2 className="text-xl sm:text-2xl font-bold text-secondary my-14 border-l-4 border-gray-400 pl-4">
                Telah Selesai
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {past.map((ev) => (
                  <TimelineItemAdakom key={ev.id} item={ev} />
                ))}
              </div>
            </>
          )}

        </div>
      </section>
    </RevealOnScroll>
  );
}
