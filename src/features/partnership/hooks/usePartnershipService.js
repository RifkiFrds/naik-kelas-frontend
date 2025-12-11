import { useEffect, useState } from "react";
import partnershipService from "../services/partnershipService"; 

export function usePartnershipService() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPaket() {
      try {
        const res = await partnershipService.getPaketKemitraan();

        // API structure: { message: "...", data: [ ... ] }
        setData(res.data || []);
      } catch (err) {
        console.error("usePartnershipService error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPaket();
  }, []);

  return { data, loading };
}
