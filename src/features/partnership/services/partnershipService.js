import apiClient from '../../../api/apiClient';

const RESOURCE = "/paket-kemitraan";

export async function getPaketKemitraan() {
  try {
    const resp = await apiClient.get(RESOURCE);
    return resp.data;
  } catch (err) {
    console.error("getPaketKemitraan error:", err);
    throw err;
  }
}

export default { getPaketKemitraan };