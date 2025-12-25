// article/views/ArticleView.jsx
import HeroSection from "../components/HeroSection";
import ArticleFilterBar from "../components/ArticleFilterBar";
import ArticleCard from "../components/ArticleCard";
import HeadlineArticle from "../components/HeadlineArticle";
import { useArticles } from "../hooks/useArticles";

export default function ArticleListView() {
  const { articles, loading, search, setSearch, hasMore, loadMore } = useArticles(); //

  const showHeadline = !search && articles.length > 0;
  const headlineData = showHeadline ? articles[0] : null;
  const displayArticles = showHeadline ? articles.slice(1) : articles;

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* margin samping kanan*/}
      <section className="max-w-6xl mx-auto px-6 md:px-10 relative z-10 pb-20">
        <ArticleFilterBar search={search} setSearch={setSearch} /> {/* */}

        {loading ? (
          <div className="mt-20 text-center text-gray-400">Memuat artikel...</div>
        ) : (
          <div className="mt-12">
            {/* Headline Section */}
            {showHeadline && <HeadlineArticle article={headlineData} />}

            {/* Grid Artikel Reguler - 2 Kolom sesuai gambar */}
            <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-16">
              {displayArticles.length ? (
                displayArticles.map((item) => (
                  <ArticleCard key={item.id} article={item} /> //
                ))
              ) : (
                console.log('No articles found')
              )}
            </div>
          </div>
        )}

        {hasMore && (
          <div className="mt-20 text-center">
            <button
              onClick={loadMore}
              className="px-8 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition"
            >
              Muat lebih banyak
            </button>
          </div>
        )}
      </section>
    </div>
  );
}