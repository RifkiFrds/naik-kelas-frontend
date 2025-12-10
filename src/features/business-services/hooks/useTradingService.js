import { useEffect, useState } from "react";
import { getLayananBisnis } from "../services/layananBisnisService";

export function useTradingService() {
  const [trading, setTrading] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getLayananBisnis();
        const data = Array.isArray(res.data) ? res.data : [];

        const filtered = data.filter(item => item.type === "trading");
        setTrading(filtered);
      } catch (err) {
        console.error("Error fetch trading:", err);
        setTrading([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { trading, loading };
}
