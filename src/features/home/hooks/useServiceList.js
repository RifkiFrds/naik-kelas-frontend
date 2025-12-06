import { useState, useEffect } from "react";
import { getLayananBisnis } from "../services/layananService";

function getCTAByType(type) {
  switch (type) {
    case "trading":
      return "Buka Akun Sekarang";
    case "jasa_recruitment":
      return "Ajukan Jasa Recruitment";
    case "modal_bisnis":
      return "Beli Modul Sekarang";
    case "webinar":
      return "Daftar Sekarang";
    default:
      return "Pelajari Lebih Lanjut"; // fallback
  }
}

export function useServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getLayananBisnis();

        const list = Array.isArray(data) ? data : data.data || [];

        // Tambahkan ctaText berdasarkan tipe
        const enhanced = list.map((item) => ({
          ...item,
          ctaText: getCTAByType(item.type),
        }));

        setServices(enhanced);

      } catch (err) {
        console.error("Error fetch layanan bisnis:", err);
        setServices([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { services, loading };
}
