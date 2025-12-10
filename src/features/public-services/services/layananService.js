import apiClient from '../../../api/apiClient';

const RESOURCE = "/layanan-umum";

export async function getLayananUmum() {
  try {
    const resp = await apiClient.get(RESOURCE);
    return resp.data;
  } catch (err) {
    console.error("getBusinessServices error:", err);
    throw err;
  }
}

export default { getLayananUmum };