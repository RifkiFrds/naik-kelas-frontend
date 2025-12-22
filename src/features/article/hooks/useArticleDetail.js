import { useEffect, useState } from "react";
import { getArticleBySlug } from "../services/articleService";

export function useArticleDetail(slug) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getArticleBySlug(slug);
        setArticle(data);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  return { article, loading };
}
