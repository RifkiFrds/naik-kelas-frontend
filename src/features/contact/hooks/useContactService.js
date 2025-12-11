import { useState } from "react";
import { sendContact } from "../services/contactService";

export function useContactService() {
  const [loading, setLoading] = useState(false);

  async function submitContact(data) {
    setLoading(true);
    const result = await sendContact(data);
    setLoading(false);
    return result;
  }

  return { submitContact, loading };
}
