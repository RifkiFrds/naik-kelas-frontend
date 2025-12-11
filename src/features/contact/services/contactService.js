import apiClient from "../../../api/apiClient";

export async function sendContact(payload) {
  try {
    const res = await apiClient.post(
      "/kontak",
      {
        nama: payload.nama,
        email: payload.email,
        nomor_telepon: payload.nomor_telepon,
        jenis_layanan: payload.jenis_layanan,
        pesan: payload.pesan
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return { success: true, data: res.data };
  } catch (err) {
    console.error("sendContact Error:", err.response?.data || err);
    return { success: false, error: err.response?.data };
  }
}
