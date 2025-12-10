import { useState, useEffect } from "react";
import { getLayananUmum } from "../services/layananService";

export function usePublicService() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getLayananUmum();
        setServices(data.data || []);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { services, loading };
}
