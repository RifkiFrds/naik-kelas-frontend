import { useEffect, useMemo, useState } from "react";
import { getArticles } from "../services/articleService";

const PAGE_SIZE = 5;

export function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    async function load() {
      try {
        const data = await getArticles();
        setArticles(data || []);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    if (!search) return articles;
    return articles.filter(
      (a) =>
        a.judul.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt?.toLowerCase().includes(search.toLowerCase())
    );
  }, [articles, search]);

  return {
    articles: filtered.slice(0, visible),
    loading,
    search,
    setSearch,
    hasMore: visible < filtered.length,
    loadMore: () => setVisible((v) => v + PAGE_SIZE),
  };
}
