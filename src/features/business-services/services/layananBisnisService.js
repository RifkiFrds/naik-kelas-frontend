import apiClient from '../../../api/apiClient';

const RESOURCE = "/layanan-bisnis";

export async function getLayananBisnis() {
  try {
    const resp = await apiClient.get(RESOURCE);
    return resp.data;
  } catch (err) {
    console.error("getBusinessServices error:", err);
    throw err;
  }
}

export default { getLayananBisnis };