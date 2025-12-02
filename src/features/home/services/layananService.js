import apiClient from "../../../api/apiClient";

export const getLayananBisnis = async () => {
  const res = await apiClient.get("/layanan-bisnis");
  return res.data;
};

// Untuk upload formdata (admin)
export const createLayananBisnis = async (formData) => {
  const res = await apiClient.post("/layanan-bisnis", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
