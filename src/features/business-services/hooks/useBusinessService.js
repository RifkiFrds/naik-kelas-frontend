import { useEffect, useState } from "react";
import { getLayananBisnis } from "../services/layananBisnisService"; // Pastikan path service benar

export function useBusinessService() {
  const [layanan, setLayanan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getLayananBisnis();
        // Handle struktur response yang mungkin berbeda (array langsung atau object data)
        const list = Array.isArray(res) ? res : res.data || [];

        // Filter: Tampilkan semua KECUALI trading (sesuai kode lama Anda)
        // Trading biasanya masuk ke layanan umum/reseller
        const filtered = list.filter((i) => i.type !== "trading");

        setLayanan(filtered);
      } catch (err) {
        console.error("Error fetching layanan:", err);
        setLayanan([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { layanan, loading };
}