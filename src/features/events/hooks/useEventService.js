import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";

export function useEventService() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getEvents(); // langsung array
        setEvents(data || []);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { events, loading };
}
