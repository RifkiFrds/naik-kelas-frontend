import apiClient from "../../../api/apiClient";

export const getLayananBisnis = async () => {
  const res = await apiClient.get("/layanan-bisnis");
  return res.data;
};

// Layanan Umum (PUBLIC)
export const getLayananUmum = async () => {
  const res = await apiClient.get("/layanan-umum");
  return res.data;
};
