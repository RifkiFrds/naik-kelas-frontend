import apiClient from "../../../api/apiClient";

const RESOURCE = "/artikel";

export async function getArticles() {
  const res = await apiClient.get(RESOURCE);
  return res.data.data;
}

export async function getArticleBySlug(slug) {
  const res = await apiClient.get(`${RESOURCE}/${slug}`);
  return res.data.data;
}
