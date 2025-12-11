import apiClient from "../../../api/apiClient";

const RESOURCE = "/event";

export async function getEvents() {
  try {
    const resp = await apiClient.get(RESOURCE);

    return resp.data.data; 
  } catch (err) {
    console.error("getEvents error:", err);
    throw err;
  }
}
