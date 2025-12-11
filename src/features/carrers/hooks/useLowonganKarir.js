import { useEffect, useState } from "react";
import { getLowonganKarir } from "../services/lowonganKarirService";

export function useLowonganKarir() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const resp = await getLowonganKarir();
        setJobs(resp || []);
      } catch (err) {
        console.error("Error fetching lowongan:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { jobs, loading };
}
