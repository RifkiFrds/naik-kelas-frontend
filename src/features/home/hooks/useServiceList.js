import { useState, useEffect } from "react";
import { getLayananBisnis, getLayananUmum } from "../services/layananService";

/** TITLE + CTA BY TYPE */
function getCTAByType(type) {
  switch (type) {
    case "jasa_recruitment":
      return "Ajukan Jasa Recruitment";
    case "modal_bisnis":
      return "Beli Modul Sekarang";
    case "webinar":
      return "Daftar Sekarang";
    case "workshop":
      return "Ikuti Workshop";
    default:
      return "Pelajari Lebih Lanjut";
  }
}

/** STATIC TRADING CARD (tidak ambil API) */
const STATIC_TRADING = {
  title: "TRADING ADAKOM NAIK KELAS",
  description:
    "Compare Your Broker, 1 Goal 1 Spirit. Bangun karier trading yang aman, legal, dan terarah dengan mitra resmi.",
  image: "/images/trading.png", 
  urlCta:
    "https://adakomnaikkelas.com/kontak",
  ctaText: "Buka Akun Sekarang",
};

export function useServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const bisnis = await getLayananBisnis();
        const umum = await getLayananUmum();

        const bisnisList = Array.isArray(bisnis) ? bisnis : bisnis.data || [];
        const umumList = Array.isArray(umum) ? umum : umum.data || [];

        /** Filter bisnis: HANYA yang bukan trading */
        const bisnisFiltered = bisnisList
          .filter((item) => item.type !== "trading")
          .map((item) => ({
            title: item.judul_bisnis,
            description: item.deskripsi,
            image: item.gambar_url,
            urlCta: item.url_cta || "#",
            ctaText: getCTAByType(item.type),
          }));

        /** Normalisasi Layanan Umum */
        const umumNormalized = umumList.map((item) => ({
          title: item.judul_layanan,
          description: item.deskripsi,
          image: item.gambar_url,
          urlCta: item.url_cta || "#",
          ctaText: "Pelajari Layanan",
        }));

        /** GABUNG: Trading (static) + Bisnis + Umum */
        setServices([STATIC_TRADING, ...bisnisFiltered, ...umumNormalized]);
      } catch (err) {
        console.error("Error fetch layanan bisnis/umum:", err);

        // minimal tetap tampil card trading
        setServices([STATIC_TRADING]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { services, loading };
}
