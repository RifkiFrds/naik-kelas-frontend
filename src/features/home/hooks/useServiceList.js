import { useState, useEffect } from "react";
import { getLayananBisnis } from "../services/layananService";

export function useServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getLayananBisnis();

        console.log("API Layanan Bisnis:", data);

        // Cek apakah data array atau object
        if (Array.isArray(data)) {
          setServices(data);
        } else if (Array.isArray(data.data)) {
          setServices(data.data);
        } else {
          setServices([]); // fallback
          console.warn("Format API tidak sesuai. Harus array.");
        }

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

