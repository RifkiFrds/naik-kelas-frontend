import apiClient from "../../../api/apiClient";

const RESOURCE = "/lowongan-karir";

export async function getLowonganKarir() {
  try {
    const resp = await apiClient.get(RESOURCE);
    return resp.data.data || resp.data; 
  } catch (err) {
    console.error("getLowonganKarir error:", err);
    throw err;
  }
}

export default { getLowonganKarir };
